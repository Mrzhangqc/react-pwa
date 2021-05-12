import React from "react"
import { notification, Button} from 'antd'

let refreshing = false
let registration = null

class ServiceWorkerUpdatePopup extends React.Component {

  constructor(props){
    super(props)
    this.init()
  }

  init = () => {
    // Listen for swUpdated event and display refresh notification as required.
    document.addEventListener('swUpdated', this.showRefreshUI, { once: true })
    // Refresh all open app tabs when a new service worker is installed.
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      })
    }
  }

  refreshApp = () => {
    console.log('refreshApp');
    // Protect against missing registration.waiting.
    if (!registration || !registration.waiting) return
    registration.waiting.postMessage({type: 'SKIP_WAITING'})
  }

  openNotification = placement => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => {
        notification.close(key)
        this.refreshApp()
      }}>
        Refresh
      </Button>
    );
    notification.open({
      message: 'Update available',
      description: 'New content is available!',
      btn,
      key,
      placement,
      duration: 0,
      style: {
        width: 260,
        marginLeft: 384 - 260
      },
      closeIcon: ' '
    });
  }

  showRefreshUI = (e) => {
    // Display a notification inviting the user to refresh/reload the app due
    // to an app update being available.
    // The new service worker is installed, but not yet active.
    // Store the ServiceWorkerRegistration instance for later use.
    registration = e.detail
    this.openNotification('bottomRight')
  }

  render(){
    return null
  }
}

export default ServiceWorkerUpdatePopup