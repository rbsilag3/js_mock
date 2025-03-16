# Survey Form for SharePoint

A React-based survey form component that can be deployed as a SharePoint web part.

## Features

- Interactive survey form with multiple sections
- Progress tracking with visual indicators
- Export responses to CSV or SharePoint
- Save draft functionality
- Responsive design

## Project Structure

```
survey-form-sharepoint/
├── public/                    # Static files
├── sharepoint/                # SharePoint-specific files
│   ├── manifest.json          # SharePoint web part manifest
│   └── webpart.js             # SharePoint web part entry point
├── src/
│   ├── components/            # React components
│   ├── data/                  # Data files
│   ├── hooks/                 # Custom React hooks
│   ├── styles/                # CSS and style files
│   ├── utils/                 # Utility functions
│   ├── App.jsx                # Main App component
│   └── main.jsx               # Application entry point
├── index.html                 # HTML entry point
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── sharepoint.config.js       # SharePoint configuration
```

## Development

### Prerequisites

- Node.js (LTS v18).
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running Locally

To start the development server:

```bash
npm start
```

### Building for Production

To build the application for production:

```bash
npm run build
```

### Building for SharePoint

To build the application for SharePoint:

```bash
npm run sp-build
npm run sp-package
```

## SharePoint Configuration

Before deploying to SharePoint, update the `sharepoint.config.js` file with your SharePoint site details:

```javascript
export const sharepointConfig = {
  siteUrl: 'https://your-sharepoint-site.com',
  listName: 'SurveyResponses',
  libraryName: 'SurveyExports',
  // ... other settings
};
```

## Deployment

1. Build the SharePoint package
2. Upload the `.sppkg` file to your SharePoint App Catalog
3. Add the web part to your SharePoint page

## License

This project is licensed under the MIT License. 