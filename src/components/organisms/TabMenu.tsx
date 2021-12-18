import Tabs from '../molecules/Tabs'
import TabField from '../molecules/TabField'
import { ReactNode, Children } from 'react'

interface TabMenuPropsType {
  children: ReactNode[]
}

export default function TabMenu({ children }: TabMenuPropsType) {
  return (
    <div className='w-full'>
      <Tabs>
        {Children.map(children, (child: any, idx: any) => {
          return (
            <TabField title={child.props.title} key={idx}>
              {child}
            </TabField>
          )
        })}
      </Tabs>
    </div>
  )
}
