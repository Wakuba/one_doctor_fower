import Tabs from '../molecules/Tabs'
import TabField from '../molecules/TabField'
import { Box } from '@fower/react'
import CrewCard from '../molecules/CrewCard'

const tabNameList: string[] = ['基本情報', '医局紹介', '周辺地図', 'イベント', 'SNS']

const TabMenu= ({ css, ...className}) => (
  <Box {...className} css={{...css}}>
    <Tabs >
        <TabField label='基本情報' key={1}>
          <CrewCard imgHeadSrc='images/professor.png' imgTailSrc='images/professor2.png'>
            <p>山中先生</p>
            <p>松村先生</p>
          </CrewCard>
        </TabField>
        <TabField label='医局紹介' key={2}>
        </TabField>
        <TabField label='周辺地図' key={3}>
        </TabField>
        <TabField label='イベント' key={4}>
        </TabField>
        <TabField label='SNS' key={5}>
        </TabField>
    </Tabs>
  </Box>
)


export default TabMenu