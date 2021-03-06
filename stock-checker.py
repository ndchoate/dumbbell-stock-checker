from argparse import ArgumentParser
from bs4 import BeautifulSoup
import datetime
import requests
import schedule
# from seleniumrequests import Firefox
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
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


def sleep(seconds):
    time.sleep(seconds)


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

        # options = webdriver.ChromeOptions()
        # options.add_argument('--ignore-certificate-errors')
        # options.add_argument("--test-type")
        # options.add_argument("--user-data-dir=/home/ndchoate/.config/google-chrome/Profile\ 1/")
        # options.binary_location = "/snap/bin/chromium"

        # driver = webdriver.Chrome('/snap/bin/chromium.chromedriver')
        # driver.get(url)

        profile = webdriver.FirefoxProfile('/home/ndchoate/.mozilla/firefox/cktfeaqa.dev-edition-default')
        driver = webdriver.Firefox(firefox_profile=profile, executable_path='/home/ndchoate/gecko/geckodriver', firefox_binary='/usr/local/firefox_dev/firefox-bin')
        driver.get('https://www.newegg.com/Oculus-New-Product-Releases/EventSaleStore/ID-10011')
        buttons = driver.find_elements(By.TAG_NAME, 'button')
        for button in buttons:
            if button.text == 'ADD TO CART':
                button.click()
                break
        # button_element = driver.find_element_by_class_name('btn btn-primary btn-mini')
        # driver.find_element_by_class_name('btn btn-primary btn-mini').click()

        item_in_stock = False
        for item in item_containers:
            content = item.text
            out_of_stock_occurrences = content.count('OUT OF STOCK')
            if out_of_stock_occurrences != 1:
                item_in_stock = True
                # Here's what the buttons look like in newegg:
                # <button class="btn btn-primary btn-mini" title="some title">Add to cart <i class="fas fa-caret-right"></i></button>
                driver = webdriver.Chrome()
                # driver.get(url)
                driver.get('https://www.newegg.com/Oculus-New-Product-Releases/EventSaleStore/ID-10011')
                driver.find_element_by_class_name('btn btn-primary btn-mini').click()
                break

        print('Value of item_in_stock for ' + label + ' page: ' + str(item_in_stock))
        # if item_in_stock:
            # send_sms_msg('ATTENTION! ' + label + ' page has an item that seems to be in stock.')

        print('\nResponse from ' + label + ' page link: ' + str(response.status_code) + '\n')
    except Exception as e:
        # send_sms_msg('Exception occurred while sending request to Ironmaster website.')
        print(e)


def selenium_check_newegg_for_rtx_3080(driver, label, msg, url):
    try:
        driver.get('https://www.newegg.com/p/pl?N=100007709%20601357247')
        # driver.get('https://www.newegg.com/Oculus-New-Product-Releases/EventSaleStore/ID-10011')
        buttons = driver.find_elements(By.TAG_NAME, 'button')
        for button in buttons:
            if button.text == 'ADD TO CART':
                button.click()
                send_sms_msg('Newegg - Added an RTX 3080 item to cart!!')
                break

    except Exception as e:
        send_sms_msg('Exception occurred while sending request to Ironmaster website.')
        print(e)


def selenium_check_best_buy_for_rtx_3080(driver, label, msg, url):
    try:
        driver.get('https://www.bestbuy.com/site/computer-cards-components/video-graphics-cards/abcat0507002.c?id=abcat0507002&qp=gpusv_facet%3DGraphics%20Processing%20Unit%20(GPU)~NVIDIA%20GeForce%20RTX%203080')
        # driver.get('https://www.bestbuy.com/site/promo/latest-macbook-pro')
        buttons = driver.find_elements(By.TAG_NAME, 'button')
        for button in buttons:
            if button.text == 'Add to Cart':
                button.click()
                send_sms_msg('Best Buy - Added an RTX 3080 item to cart!!')
                break

    except Exception as e:
        send_sms_msg('Exception occurred while sending request to Ironmaster website.')
        print(e)


def selenium_check_amazon_for_rtx_3080(driver, label, msg, url):
    try:
        # driver.get('https://www.bestbuy.com/site/computer-cards-components/video-graphics-cards/abcat0507002.c?id=abcat0507002&qp=gpusv_facet%3DGraphics%20Processing%20Unit%20(GPU)~NVIDIA%20GeForce%20RTX%203080')
        driver.get('https://www.amazon.com/stores/page/CD6F9C37-AF77-4FE0-B512-03975DA0D149?ingress=0&visitId=af048e71-e3f8-4c22-ab50-c4a38ae74d38')

        # Amazon dynamically loads its items. Need to wait a few seconds to load
        start_time = time.time()
        time.sleep(5.0 - ((time.time() - start_time) % 5.0))

        buttons = driver.find_elements(By.TAG_NAME, 'button')
        for button in buttons:
            if button.text == 'Add to Cart':
                button.click()
                send_sms_msg('Amazon - Added an RTX 3080 item to cart!!')
                break

    except Exception as e:
        send_sms_msg('Exception occurred while sending request to Ironmaster website.')
        print(e)


'''
Use selenium to check for an in-stock RTX 3080 and press the button to add to cart

driver - (WebDriver) the selenium driver
vendor - (str) lowercase string of the vendor
button_text - (str) expected text that is used for the button to press
url - (str) URL to check
'''
def selenium_check_for_rtx_3080(driver, vendor, button_text, url):
    try:
        driver.get(url)

        # Amazon dynamically loads its items. Need to wait a couple of seconds to load
        if vendor == 'amazon':
            start_time = time.time()
            time.sleep(2.0 - ((time.time() - start_time) % 2.0))

        buttons = driver.find_elements(By.TAG_NAME, 'button')
        for button in buttons:
            if button.text == button_text:
                button.click()
                send_sms_msg(vendor + ' - Added an RTX 3080 item to cart!!')
                start_time = time.time()
                time.sleep(60.0 - ((time.time() - start_time) % 60.0))
                break

    except Exception as e:
        # send_sms_msg('Exception occurred while sending request to  website.')
        print(e)


'''
Use selenium to check for an in-stock RTX 3080 and press the button to add to cart
for a specific product page on Newegg

driver - (WebDriver) the selenium driver
vendor - (str) lowercase string of the vendor
button_text - (str) expected text that is used for the button to press
url - (str) URL to check
'''
def selenium_check_for_specific_rtx_3080_on_newegg(driver, vendor, button_text, url):
    try:
        driver.get(url)

        buy_box = driver.find_elements(By.CLASS_NAME, 'product-buy-box')[0]
        buttons = buy_box.find_elements(By.TAG_NAME, 'button')
        for button in buttons:
            if button.text == button_text:
                button.click()
                send_sms_msg(vendor + ' - Added an RTX 3080 to cart!!')
                sidebar_list = driver.find_elements(By.CLASS_NAME, 'modal-content')
                if len(sidebar_list) != 0:
                    sidebar = sidebar_list[0]
                    sidebar_buttons = sidebar.find_elements(By.TAG_NAME, 'button')
                    for sidebar_button in sidebar_buttons:
                        if sidebar_button.text == 'NO, THANKS':
                            sidebar_button.click()

                sleep(1800)  # 30 minutes
                break

    except Exception as e:
        # send_sms_msg('Exception occurred while sending request to  website.')
        print(e)


def main():
    # send_sms_msg('Test message')
    start_time = time.time()
    schedule.every().day.at("08:00").do(send_health_check)
    schedule.every().day.at("15:00").do(send_health_check)
    schedule.every().day.at("21:00").do(send_health_check)

    parser = ArgumentParser()
    parser.add_argument('-p', '--plat', help='the platform, either linux or windows')
    parser.add_argument('-v', '--vendor', help='the product vendor')

    args = vars(parser.parse_args())
    plat = args['plat']
    vendor = args['vendor'].lower()

    if plat == 'wnt':
        # wnt
        profile = webdriver.FirefoxProfile('C:\\Users\\Nathan\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\npkxnmew.default')
        driver = webdriver.Firefox(firefox_profile=profile,
                                   executable_path='D:\\gecko\\geckodriver.exe',
                                   firefox_binary='C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe')
    else:
        # lnx
        profile = webdriver.FirefoxProfile('/home/ndchoate/.mozilla/firefox/cktfeaqa.dev-edition-default')
        driver = webdriver.Firefox(firefox_profile=profile,
                                   executable_path='/home/ndchoate/gecko/geckodriver',
                                   firefox_binary='/usr/local/firefox_dev/firefox-bin')

    # Newegg listings
    # EVGA RTX 3080 FTW3 ULTRA GAMING - $820
    evga_ftw3 = 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3897-kr/p/N82E16814487518'

    # EVGA RTX 3080 XC3 ULTRA GAMING - $790
    evga_xc3 = 'https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3885-kr/p/N82E16814487520'

    # ASUS TUF Gaming - $700
    asus_tuf = 'https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453'

    # MSI VENTUS 3x - $700
    msi_ventus = 'https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600'

    # MSI VENTUS 3X OC - $780
    msi_ventus_oc = 'https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g-oc/p/N82E16814137598'

    while True:
        schedule.run_pending()
        ts = time.time()
        st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
        print('\n---------------------------------------------\n')
        print(st + ' EST\n')

        if vendor == 'newegg':
            # Test URL: https://www.newegg.com/Oculus-New-Product-Releases/EventSaleStore/ID-10011
            # selenium_check_for_rtx_3080(driver,
            #                             vendor,
            #                             'ADD TO CART',
            #                             'https://www.newegg.com/p/pl?N=100007709%20601357247')
            # selenium_check_newegg_for_rtx_3080(driver,
            #                                    'Newegg RTX 3080s',
            #                                    'OUT OF STOCK',
            #                                    'https://www.newegg.com/p/pl?N=100007709%20601357247')
            start_timer = time.time()

            selenium_check_for_specific_rtx_3080_on_newegg(driver,
                                                           vendor,
                                                           'ADD TO CART',
                                                           evga_ftw3)
            selenium_check_for_specific_rtx_3080_on_newegg(driver,
                                                           vendor,
                                                           'ADD TO CART',
                                                           evga_xc3)
            selenium_check_for_specific_rtx_3080_on_newegg(driver,
                                                           vendor,
                                                           'ADD TO CART',
                                                           asus_tuf)
            selenium_check_for_specific_rtx_3080_on_newegg(driver,
                                                           vendor,
                                                           'ADD TO CART',
                                                           msi_ventus)
            selenium_check_for_specific_rtx_3080_on_newegg(driver,
                                                           vendor,
                                                           'ADD TO CART',
                                                           msi_ventus_oc)

            end_timer = time.time()
            total_time = end_timer - start_timer
            print('total_time on checking newegg products: ' + str(int(total_time)))
        elif vendor == 'bestbuy':
            # Test URL: https://www.bestbuy.com/site/promo/latest-macbook-pro
            selenium_check_for_rtx_3080(driver,
                                        vendor,
                                        'Add to Cart',
                                        'https://www.bestbuy.com/site/computer-cards-components/video-graphics-cards/abcat0507002.c?id=abcat0507002&qp=gpusv_facet%3DGraphics%20Processing%20Unit%20(GPU)~NVIDIA%20GeForce%20RTX%203080')
            # selenium_check_best_buy_for_rtx_3080(driver,
            #                                      'Newegg RTX 3080s',
            #                                      'OUT OF STOCK',
            #                                      'https://www.bestbuy.com/site/promo/latest-macbook-pro')
        elif vendor == 'amazon':
            selenium_check_for_rtx_3080(driver,
                                        vendor,
                                        'Add to Cart',
                                        'https://www.amazon.com/stores/GeForce/RTX3080_GEFORCERTX30SERIES/page/6B204EA4-AAAC-4776-82B1-D7C3BD9DDC82')
            # selenium_check_amazon_for_rtx_3080(driver,
            #                                      'Newegg RTX 3080s',
            #                                      'OUT OF STOCK',
            #                                      'https://www.bestbuy.com/site/promo/latest-macbook-pro')

        # time.sleep(600.0 - ((time.time() - start_time) % 600.0))

        if vendor == 'bestbuy':
            time.sleep(20.0 - ((time.time() - start_time) % 20.0))
        elif vendor == 'newegg':
            sleep(5)
        else:
            time.sleep(15.0 - ((time.time() - start_time) % 15.0))


if __name__ == '__main__':
    main()
