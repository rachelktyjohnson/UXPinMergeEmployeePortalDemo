import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react'
import {Container, Tabs, Tab} from "@mui/material";
import Header from "./components/Header.jsx";
import User from "./components/User.jsx";
import Tasks from "./components/Tasks.jsx";
import Timesheet from "./components/Timesheet.jsx";
import RequestLeave from "./components/RequestLeave.jsx";

function App() {

    const [tabValue, setTabValue] = useState('1')

    const handleChange = (event, newValue) => {
        setTabValue(newValue)
    }

  return (
      <Container
          disableGutters={true}
      >
          <Header></Header>
          <User></User>
          <Tabs
              value={tabValue}
              centered={true}
              onChange={handleChange}
          >
              <Tab
                  label="Tasks"
                  value="1"
              />
              <Tab
                  label="Timesheet"
                  value="2"
              />
              <Tab
                  label="Request Leave"
                  value="3"
              />
          </Tabs>
          <Container>
              { tabValue==="1" ? <Tasks></Tasks> : null}
              { tabValue==="2" ? <Timesheet></Timesheet> : null}
              { tabValue==="3" ? <RequestLeave></RequestLeave> : null}
          </Container>
      </Container>
  )
}

export default App
