import { useState } from 'react';
import ToolsGrid from './ToolsGrid';

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState('Language');

  const tabs = ['Language', 'Database', 'Marketing', 'Design', 'Communication', 'Artificial Intelligence'];

  // Data specific to each tab
  const tabData = {
    Language: [
      { name: 'Node.js', logo: '/technologyIcons/node.png' },
      { name: 'React.js', logo: '/technologyIcons/reactjs.png' },
      { name: 'Flutter', logo: '/technologyIcons/flutter.png' },
      { name: 'Java', logo: '/technologyIcons/java.png' },
      { name: 'Python', logo: '/technologyIcons/python.png' },
      { name: 'React Native', logo: '/technologyIcons/react-native.png' },
],
    Database: [
        { name: 'MySql', logo: '/technologyIcons/mysql.png' },
        { name: 'PostgreSQL', logo: '/technologyIcons/postgresql.png' },
        { name: 'MongoDb', logo: '/technologyIcons/mongodb.png' },
        { name: 'MsSqlServer', logo: '/technologyIcons/msserver.png' },
        { name: 'Firebase', logo: '/technologyIcons/firebase.png' },
        { name: 'Oracle', logo: '/technologyIcons/oracle.png' },

    ],
    Marketing: [
        { name: 'Semrush', logo: '/technologyIcons/semrush.png' },
        { name: 'UberSuggest', logo: '/technologyIcons/u.png' },
        { name: 'Ahrefs', logo: '/technologyIcons/ahref.png' },
        { name: 'Google Analytics', logo: '/technologyIcons/googleAnalytics.png' },
        { name: 'Google Adwords', logo: '/technologyIcons/googleAds.png' },
        { name: 'Screaming Frog', logo: '/technologyIcons/screamingFrog.png' },
    ],
    Design: [
        { name: 'Illustrator', logo: '/technologyIcons/illustrator.png' },
        { name: 'Photoshop', logo: '/technologyIcons/photoshop.png' },
        { name: 'Figma', logo: '/technologyIcons/figma.png' },
        { name: 'PremiurPro', logo: '/technologyIcons/premierPro.png' },
        { name: 'Filmora', logo: '/technologyIcons/flimora.png' },
        { name: 'Canva', logo: '/technologyIcons/canva.png' },
    ],
    Communication: [
        { name: 'MS Suite', logo: '/technologyIcons/microsoftSuite.png' },
        { name: 'Google', logo: '/technologyIcons/google.png' },
        { name: 'Discord', logo: '/technologyIcons/discord.png' },
        { name: 'Zoom', logo: '/technologyIcons/zoom.png' },
        { name: 'Slack', logo: '/technologyIcons/slack.png' },
        { name: 'Trello', logo: '/technologyIcons/trello.png' },
    ],
    'Artificial Intelligence': [
        { name: 'ChatGPT', logo: '/technologyIcons/chatgpt.png' },
        { name: 'Gemini', logo: '/technologyIcons/gemini.png' },
        { name: 'Perplexity', logo: '/technologyIcons/perplexity.png' },
        { name: 'Notion', logo: '/technologyIcons/notion.png' },
        { name: 'PathAI', logo: '/technologyIcons/Pathai.png' },
        { name: 'Midjourney', logo: '/technologyIcons/midjourney.png' },
    ]
  };

  return (
    <>
    <div className="container mt-4 pt-4">
    <h2 className="display-4">Tools to support your growth
</h2>
    <p className='mb-4'>Guaranteed, Speed, Quality and Security</p>
    </div>
    <div className="container-fluid bg-black">
      <div className="d-flex flex-md-row flex-column gap-2">
        {/* Tabs Section */}
        <div className="col-md-3 border-right d-flex justify-content-center align-items-center">
          <ul className="list-group gap-3">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`btn btn-animation btn-light btn-tab  ${tab === activeTab ? 'text-white btn-dark btn-outline-light' : ''} `}
                onClick={() => setActiveTab(tab)}
                style={{ cursor: 'pointer' }}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        {/* Clients Grid Section */}
        <div className="col-md-9">
          <ToolsGrid clients={tabData[activeTab]} />
        </div>
      </div>
    </div>
    </>
  );
}
