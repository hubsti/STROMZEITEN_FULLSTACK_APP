import React, { Component } from "react";
import styles from "../styles/Notifications.module.css";
class DesktopNotification extends Component {

  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  showNotification() {
    new Notification('Hello World')
    
  }

  render() {
    return (
      <div>
        <button className = {styles.button} onClick={this.showNotification} ><span>Send notification </span></button></div>
    );
  }
}

export default DesktopNotification;