from bs4 import BeautifulSoup
import datetime
import requests
import schedule
from seleniumrequests import Firefox
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from twilio.rest import Client


account_sid = 'AC4c195802a6bcf042dcefac3c5943f1cf'
auth_token = ''
client = Client(account_sid, auth_token)


def send_sms_msg(msg):
    """Send an SMS message from your Twilio number to your personal number

    msg - (str) the text message to send
    """
    message = client.messages \
        .create(
            body=msg,
            from_='+12566395913',
            to='+15134199125'
        )

    print(message.sid)


def send_health_check():
    send_sms_msg('Health check')


def basic_check_for_product(url, disclaimer_msg):
    response = requests.get(url)

    if response.status_code != 200:
        send_sms_msg('ATTENTION NEEDED! Response other than 200 OK received from Ironmaster website '
                     '(got a ' + str(response.status_code) + ')')
        return

    html = response.text

    soup = BeautifulSoup(html, 'html.parser')

    span_for_stock_current = soup.find('span', {'class': 'stock'})

    # One of the strongest indicators is if this is not present
    disclaimer_msg_present = disclaimer_msg in html

    # Check for "Add to Cart" button:
    add_to_cart_button_current = soup.find('button', {'class', 'single_add_to_cart_button button alt'})

    # print(span_for_stock_current.text)
    possible_in_stock = span_for_stock_current.text != 'OUT OF STOCK'
    add_to_cart_button_present = add_to_cart_button_current is not None

    print('possible_in_stock: ' + str(possible_in_stock))
    print('disclaimer_msg_present: ' + str(disclaimer_msg_present))
    print('add_to_cart_button_present: ' + str(add_to_cart_button_present))

    if possible_in_stock or not disclaimer_msg_present or add_to_cart_button_present:
        send_sms_msg('\n\nATTENTION!! An Ironmaster product is possibly in stock. The following criteria have been '
                     'met:'
                     '\n\nStock span text not \'OUT OF STOCK\': ' + str(possible_in_stock) +
                     '\nDisclaimer message is present: ' + str(disclaimer_msg_present) +
                     '\nAdd to cart button is present: ' + str(add_to_cart_button_present))


def check_for_dumbbells():
    print('Info for adjustable dumbbells:')
    url = 'https://www.ironmaster.com/products/quick-lock-adjustable-dumbbells-75/'
    response = requests.get(url)

    if response.status_code != 200:
        send_sms_msg('ATTENTION NEEDED! Response other than 200 OK received from Ironmaster website '
                     '(got a ' + str(response.status_code) + ')')
        return

    html = response.text

    out_of_stock_html_file = open('current_dumbbells_page.html', 'r')
    out_of_stock_html = out_of_stock_html_file.read()

    old_html_file = open('old_in_stock_dumbbells_page.html', 'r')
    old_html = old_html_file.read()

    soup = BeautifulSoup(html, 'html.parser')
    out_of_stock_soup = BeautifulSoup(out_of_stock_html, 'html.parser')
    old_soup = BeautifulSoup(old_html, 'html.parser')

    # print(out_of_stock_html == html)

    # Check for the stock span:
    #   <span class="product-stock out-of-stock">Availability: <span class="stock">OUT OF STOCK</span>
    span_for_stock_current = soup.find('span', {'class': 'stock'})
    span_for_stock_old = old_soup.find('span', {'class': 'stock'})

    # One of the strongest indicators is if this is not present
    disclaimer_msg_present = 'estimate for next stock batch' in html

    # Check for "Add to Cart" button:
    # <button type="submit" name="add-to-cart" value="10" class="single_add_to_cart_button button alt">Add to
    #       cart</button>
    add_to_cart_button_current = soup.find('button', {'class', 'single_add_to_cart_button button alt'})
    # add_to_cart_button_old = old_soup.find('button', {'class', 'single_add_to_cart_button button alt'})

    possible_in_stock = span_for_stock_current.text != 'OUT OF STOCK'
    stock_span_current_same_as_old = span_for_stock_current.text == span_for_stock_old.text
    add_to_cart_button_present = add_to_cart_button_current is not None

    print('possible_in_stock: ' + str(possible_in_stock))
    print('disclaimer_msg_present: ' + str(disclaimer_msg_present))
    print('add_to_cart_button_present: ' + str(add_to_cart_button_present))
    print('stock_span_current_same_as_old: ' + str(stock_span_current_same_as_old))

    if possible_in_stock or stock_span_current_same_as_old or not disclaimer_msg_present or add_to_cart_button_present:
        send_sms_msg('\n\nATTENTION!! Ironmaster 75lb Dumbbell Set possibly in stock. The following criteria have been '
                     'met:'
                     '\n\nStock span text not \'OUT OF STOCK\': ' + str(possible_in_stock) +
                     '\nDisclaimer message is present: ' + str(disclaimer_msg_present) +
                     '\nAdd to cart button is present: ' + str(add_to_cart_button_present) +
                     '\nCurrent stock span same as old, in stock span: ' + str(stock_span_current_same_as_old))


def check_for_super_bench():
    print('\nInfo for super bench:')
    basic_check_for_product('https://www.ironmaster.com/products/super-bench-adjustable-weightlifting-bench/',
                            'item is out of stock until approx')


def check_for_super_bench_pro():
    print('\nInfo for super bench pro:')
    basic_check_for_product('https://www.ironmaster.com/products/super-bench-pro/',
                            'item is out of stock until approx')

def check_if_website_is_up():
    try:
        # url = 'https://www.ironmaster.com/products/super-bench-pro/'
        url = 'https://www.ironmaster.com/'

        response = requests.get(url)

        probably_up = not (response.status_code == 503 or response.status_code == 403)

        if response.status_code == 200 or probably_up:
            send_sms_msg('Ironmaster site probably back up. Got a 200 or not 503 or 403 response for super bench pro page')

        print('\nResponse from super bench link: ' + str(response.status_code) + '\n')
    except Exception as e:
        send_sms_msg('Exception occurred while sending request to Ironmaster website.')
        print(e)
        print(e.with_traceback())


def check_page_for_msg(label, msg, url):
    try:
        response = requests.get(url)

        if response.status_code != 200:
            send_sms_msg('Attention needed. Got a response other than 200 OK from ' + label + ' page.')

        html = response.text

        soup = BeautifulSoup(html, 'html.parser')

        disclaimer_msg_present = msg in html

        html_file = open(label + '.html', 'w', encoding='utf-8')
        html_file.write(html)
        html_file.close()
        availability = soup.find('div', {'class', 'availability'})

        print('Value of disclaimer_msg_present for ' + label + ' page: ' + str(disclaimer_msg_present))
        if not disclaimer_msg_present:
            send_sms_msg('ATTENTION! ' + label + ' page message has changed.')

        print('\nResponse from ' + label + ' page link: ' + str(response.status_code) + '\n')
    except Exception as e:
        send_sms_msg('Exception occurred while sending request to Ironmaster website.')
        print(e)


def check_nvidia_page_for_msg(label, msg, url):
    try:
        response = requests.get(url)

        if response.status_code != 200:
            send_sms_msg('Attention needed. Got a response other than 200 OK from ' + label + ' page.')

        html = response.text

        res = [i for i in range(len(html)) if html.startswith(msg, i)]

        disclaimer_msg_present = msg in html
        incorrect_num_of_substrs = len(res) != 4

        print('Value of disclaimer_msg_present for ' + label + ' page: ' + str(disclaimer_msg_present))
        print('Value of incorrect_num_of_substrs for ' + label + ' page: ' + str(incorrect_num_of_substrs))
        if not disclaimer_msg_present or incorrect_num_of_substrs:
            send_sms_msg('ATTENTION! ' + label + ' page message has changed.')

        print('\nResponse from ' + label + ' page link: ' + str(response.status_code) + '\n')
    except Exception as e:
        send_sms_msg('Exception occurred while sending request to Ironmaster website.')
        print(e)


def check_for_dumbbell_product_page():
    print('Info for adjustable dumbbell products page:')
    url = 'https://www.ironmaster.com/products/quick-lock-adjustable-dumbbells-75/'
    response = requests.get(url)

    if response.status_code != 200:
        send_sms_msg('ATTENTION NEEDED! Response other than 200 OK received from Ironmaster website '
                     '(got a ' + str(response.status_code) + ')')
        return

    html = response.text

    products_not_shown = 'stock has been unexpectedly delayed'
    if not products_not_shown:
        send_sms_msg('Dumbbells product page might be up again')


def check_newegg_for_rtx_3080(label, msg, url):
    try:
        response = requests.get(url)

        if response.status_code != 200:
            send_sms_msg('Attention needed. Got a response other than 200 OK from ' + label + ' page.')

        html = response.text

        soup = BeautifulSoup(html, 'html.parser')

        # res = [i for i in range(len(html)) if html.startswith(msg, i)]

        item_containers = soup.findAll("div", {"class": "item-cell"})

        # print('Value of res from newegg page for OUT OF STOCK instances: ' + str(res))

        item_in_stock = False
        for item in item_containers:
            content = item.text
            out_of_stock_occurrences = content.count('OUT OF STOCK')
            if out_of_stock_occurrences != 1:
                item_in_stock = True
                break

        print('Value of item_in_stock for ' + label + ' page: ' + str(item_in_stock))
        if item_in_stock:
            send_sms_msg('ATTENTION! ' + label + ' page has an item that seems to be in stock.')

        print('\nResponse from ' + label + ' page link: ' + str(response.status_code) + '\n')
    except Exception as e:
        send_sms_msg('Exception occurred while sending request to Ironmaster website.')
        print(e)


def main():
    # send_sms_msg('Test message')
    start_time = time.time()
    schedule.every().day.at("08:00").do(send_health_check)
    schedule.every().day.at("15:00").do(send_health_check)
    schedule.every().day.at("23:00").do(send_health_check)

    while True:
        schedule.run_pending()
        ts = time.time()
        st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
        print('\n---------------------------------------------\n')
        print(st + ' EST\n')
        check_page_for_msg('Sit-Up Attachment',
                           'This item is out of stock until approx mid October',
                           'https://www.ironmaster.com/products/crunch-situp-attachment/')
        # check_nvidia_page_for_msg('RTX 3080',
        #                    'NOTIFY ME',
        #                    'https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080/')
        check_newegg_for_rtx_3080('Newegg RTX 3080s',
                                  'OUT OF STOCK',
                                  'https://www.newegg.com/p/pl?N=100007709%20601357247')

        # time.sleep(600.0 - ((time.time() - start_time) % 600.0))
        time.sleep(150.0 - ((time.time() - start_time) % 150.0))


if __name__ == '__main__':
    main()
