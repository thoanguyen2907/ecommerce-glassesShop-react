import { notification } from 'antd'
export const openNotification = ( message: any, description: any) => {
    notification.open({
      message: message,
      description:description,
    });
  };