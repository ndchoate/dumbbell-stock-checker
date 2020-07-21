from bs4 import BeautifulSoup
import datetime
import requests
import time
from twilio.rest import Client


account_sid = 'AC4c195802a6bcf042dcefac3c5943f1cf'
auth_token = 'e2bf9ec2968b1443b223100775f66b74'
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


def check_for_dumbbells():
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
    disclaimer_msg_present = 'best estimate for next stock batch' in html

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


def main():
    # send_sms_msg('Test message')
    start_time = time.time()
    while True:
        ts = time.time()
        st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
        print('\n---------------------------------------------\n')
        print(st + ' EST\n')
        check_for_dumbbells()
        time.sleep(600.0 - ((time.time() - start_time) % 600.0))


if __name__ == '__main__':
    main()
