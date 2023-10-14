import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   
  export function Quest(props) {
    const data = [
      {
        label: `${props.Answer1}`,
        value: `${props.Answer1}`,
      },
      {
        label: `${props.Answer2}`,
        value: `${props.Answer2}`,
      },
      {
        label: `${props.Answer3}`,
        value: `${props.Answer3}`,
      },
      {
        label: `${props.Answer4}`,
        value: `${props.Answer4}`,
      },
      
    ];
   
    return (
      <Tabs value="html" orientation="vertical">
        <TabsHeader className="w-32">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }