import { Box } from '@fower/react'
import { styled } from '@fower/styled'

type TabButtonsProps = {
  buttons: string[];
  changeTab: any;
  activeTab: any;
}

const TabButtons: React.FC<TabButtonsProps> = ({buttons, changeTab, activeTab}) => {
  console.log(activeTab)
  return (
    <Box toLeft ml-1 spaceX-1>
      {buttons.map((button, idx) =>
           <Box as='button' key={idx} h-8 minH='30px' w-16 minW='60px' coreFontSizeSM white roundedT='3px' cursorPointer bg={ button === activeTab ? 'mainBlueRich' : '#5DB0D065'}  onClick={() => changeTab(button)}>{button}</Box >
      )}
    </Box>
  )
}
export default TabButtons
