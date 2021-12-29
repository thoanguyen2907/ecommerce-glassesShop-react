import React from 'react'
import { Tabs } from 'antd'
import TryOnGlasses from '../TryOnGlasses/TryOnGlasses'
import TryOnGlassesMenModel from '../TryOnGlasses/TryOnGlassesMenModel'
import {Container} from '../../StyledElements/Container/Container'
import './GlassesTrialRoom.scss'
export default function GlassesTrialRoom() {
    const { TabPane } = Tabs

    return (
        <Container>
        <Tabs defaultActiveKey="1" >
        <TabPane tab="Women Trying Glasses Room" key="1" className='tabKey'>
          <TryOnGlasses/>
        </TabPane>
        <TabPane tab="Men Trying Glasses Room" key="2">
        <TryOnGlassesMenModel/>
        </TabPane>
        
      </Tabs>
      </Container>
    )
}
