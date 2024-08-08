import React from 'react'
import Dashboard from './Dashboard'
import ViewData from './ViewData'
import Demo from './Demo';
import Project from './Models/Project';
const ContentView = (data) => {

  const mslinks = {
    Department: ['Department', 'https://localhost:7288/api/Project', <Demo/>],
    Designation: ['Designation', 'https://localhost:7288/api/Project', <Demo/>],
    Employee: ['Employee', 'https://localhost:7288/api/Project', <Demo/>],
    'Employee Technology': ['Employee Technology', 'https://localhost:7288/api/Project', <Demo/>],
    Technology: ['Technology', 'https://localhost:7288/api/Project', <Demo/>],
    Client: ['Client', 'https://localhost:7288/api/Project', <Demo/>],
    ContactType: ['ContactType', 'https://localhost:7288/api/Project', <Demo/>],
    ClientContact: ['ClientContact', 'https://localhost:7288/api/Project', <Demo/>],
    Project: ['Project', 'https://localhost:7288/api/Project', <Project/>],
    'Project Employee': ['Project Employee', 'https://localhost:7288/api/ProjectEmployee', <Demo/>],
    'Project Technology': ['Project Technology', 'https://localhost:7288/api/ProjectTechnology', <Demo/>],
    SOW: ['SOW', 'https://localhost:7288/api/Project', <Demo/>],
    SOWStatus: ['SOWStatus', 'https://localhost:7288/api/Project', <Demo/>],
    SOWRequirement: ['SOWRequirement', 'https://localhost:7288/api/Project', <Demo/>],
    SOWProposedTeam: ['SOWProposedTeam', 'https://localhost:7288/api/Project', <Demo/>],
    Interviews: ['Interviews', 'https://localhost:7288/api/Project/getAllProjects', <Demo/>],
    InterviewStatus: ['InterviewStatus', 'https://localhost:7288/api/Project', <Demo/>],
    Webinars: ['Webinars', 'https://localhost:7288/api/Project', <Demo/>],
    Blogs: ['Blogs', 'https://localhost:7288/api/Project', <Demo/>]
}

  if(data.props === "Dashboard"){
    return <Dashboard/>
  }
  else{
    return <ViewData props={mslinks[data.props]}/>
    // return <Demo/>
  }
}

export default ContentView;
