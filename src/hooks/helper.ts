import { Notify, Loading } from 'quasar';

export default function useHelper() {
  /**
   * Shows error notification flash message
   * @param messages error notification flash message
   */
  function errorNotification(messages: string) {
    Notify.create({
      color: 'negative',
      textColor: 'white',
      message: messages,
      position: 'top-right',
      icon: 'close',
    });
  }

  /**
     * Shows success notification flash message
     * @param messages success notification flash message
     */
  function successNotification(messages: string) {
    Notify.create({
      color: 'positive',
      textColor: 'white',
      message: messages,
      position: 'top-right',
      icon: 'check_circle',
    });
  }

  /**
   * Show loading overlay screen
   * @param messages loading message
   */
  function showLoading(messages = 'Loading...') {
    Loading.show({
      message: messages,
    });

    // Hide loading overlay after 1500 ms
    setTimeout(() => {
      Loading.hide();
    }, 1500);
  }

  return { successNotification, errorNotification, showLoading };
}
