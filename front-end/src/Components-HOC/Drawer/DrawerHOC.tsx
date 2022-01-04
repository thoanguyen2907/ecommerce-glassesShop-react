import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_DRAWER, OPEN_DRAWER } from '../../types';
import { Drawer, Button } from 'antd';
import { ButtonBlue } from '../../StyledElements/Button/Button';
export default function DrawerHOC() {
    const dispatch =  useDispatch();
    const {visible, ComponentDrawerContent, callBackSubmit, title} = useSelector((state: any) => state.drawer); 
    const showDrawer = () => {
        dispatch({
          type: OPEN_DRAWER, 
        })
      };
     
      const  onClose = () => {
        dispatch({
          type: CLOSE_DRAWER
        })
      };

    return (
        <div>
            <Drawer
          title={title}
          width={720}
          onClose={onClose}
          visible = {visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <ButtonBlue onClick={callBackSubmit} type='submit' >
                Submit
              </ButtonBlue>
            </div>
          }
        >
    {ComponentDrawerContent}
        </Drawer>
        </div>
    )
}
