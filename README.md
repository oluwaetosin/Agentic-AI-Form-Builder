# Agentic AI Form Builder

An intelligent form builder application that uses OpenAI's GPT-4 to dynamically create forms based on natural language descriptions. This full-stack application combines the power of AI with modern web technologies to provide an intuitive form building experience.

## 🚀 Features

### AI-Powered Form Generation
- **Natural Language Processing**: Describe your form requirements in plain English
- **Intelligent Form Creation**: GPT-4 analyzes your input and automatically generates appropriate form fields
- **Dynamic Field Types**: Supports text inputs, textareas, select dropdowns, radio buttons, and checkboxes
- **Smart Validation**: Automatically applies required field validation based on context

### Form Management
- **Save & Load**: Persist form configurations for future use
- **Form Library**: View and manage all saved forms
- **Real-time Preview**: See your form as it's being built
- **Responsive Design**: Works seamlessly across desktop and mobile devices

### User Experience
- **Intuitive Interface**: Clean, modern Bootstrap-based UI
- **Loading States**: Visual feedback during AI processing
- **Error Handling**: Graceful error management and user feedback
- **Accessibility**: Built with accessibility best practices

## 🏗️ Architecture

### Frontend (Angular 19)
- **Framework**: Angular 19 with TypeScript
- **Styling**: Bootstrap 5 with SCSS
- **Forms**: Reactive Forms with dynamic validation
- **HTTP Client**: Built-in Angular HTTP client for API communication

### Backend (Node.js/Express)
- **Runtime**: Node.js with Express.js
- **Database**: In-memory storage (easily extendable to persistent storage)
- **CORS**: Cross-origin resource sharing enabled
- **API**: RESTful endpoints for form configuration management

### AI Integration
- **Provider**: OpenAI GPT-4
- **Function Calling**: Uses OpenAI's function calling feature for structured responses
- **Tool Management**: Custom tool execution system for different form operations

## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agentic-ai
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../form-builder
   npm install
   ```

4. **Configure OpenAI API Key**
   - Open `form-builder/src/app/app.component.ts`
   - Replace the `apiKey` value with your OpenAI API key
   - **Important**: For production, use environment variables instead of hardcoding the key

## 🚀 Running the Application

### Start the Backend Server
```bash
cd backend
node index.js
```
The backend server will run on `http://localhost:3000`

### Start the Frontend Application
```bash
cd form-builder
ng serve
```
The frontend application will run on `http://localhost:4200`

## 📖 Usage

### Creating a Form
1. Open the application in your browser
2. In the prompt textarea, describe the form you want to create:
   - "Create a contact form with name, email, and message fields"
   - "Build a survey form with multiple choice questions about customer satisfaction"
   - "Generate a registration form for a conference"

3. Click "Submit" to let the AI process your request
4. Watch as your form is dynamically generated in the preview area

### Saving Forms
- After creating a form, you can save it by including saving instructions in your prompt:
  - "Save this form as 'Customer Contact Form'"
  - "Please save this configuration as 'Event Registration'"

### Loading Forms
- To load a previously saved form:
  - "Load my Customer Contact Form"
  - "Show me the Event Registration form"

## 🔧 Technical Details

### AI Function Calling
The application uses OpenAI's function calling feature with three main tools:

1. **build_form**: Creates form fields based on user intent
2. **save_form**: Saves the current form configuration
3. **load_form**: Loads previously saved forms

### Form Field Types
- **textbox/text**: Single-line text input
- **textarea**: Multi-line text input
- **select**: Dropdown selection
- **radiobutton**: Single choice from multiple options
- **checkbox**: Boolean toggle

### API Endpoints
- `GET /`: Retrieve all saved form configurations
- `POST /`: Save a new form configuration

## 🔐 Security Considerations

- **API Key Management**: Store OpenAI API keys securely using environment variables
- **Input Validation**: Validate all user inputs before processing
- **CORS Configuration**: Properly configure CORS for production environments
- **Rate Limiting**: Implement rate limiting for API calls to prevent abuse

## 🎯 Future Enhancements

- **Persistent Database**: Replace in-memory storage with MongoDB/PostgreSQL
- **User Authentication**: Add user accounts and form ownership
- **Advanced Field Types**: Support for file uploads, date pickers, and more
- **Form Templates**: Pre-built form templates for common use cases
- **Export Functionality**: Export forms as HTML, JSON, or PDF
- **Analytics**: Track form usage and performance metrics
- **Multi-language Support**: Internationalization for global users

## 🧪 Testing

### Frontend Testing
```bash
cd form-builder
ng test
```

### Backend Testing
```bash
cd backend
npm test
```

## 🚀 Deployment

### Frontend Deployment
```bash
cd form-builder
ng build --prod
```

### Backend Deployment
- Deploy to your preferred Node.js hosting service
- Set environment variables for production configuration
- Configure CORS settings for your domain

## 📦 Dependencies

### Frontend Dependencies
- Angular 19.x
- Angular Forms & HTTP Client
- Bootstrap 5
- RxJS
- TypeScript

### Backend Dependencies
- Express.js
- CORS middleware
- Node.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For issues and questions:
- Create an issue in the GitHub repository
- Check the documentation for common solutions
- Review the code comments for implementation details

## 🌟 Acknowledgments

- OpenAI for providing the GPT-4 API
- Angular team for the excellent framework
- Bootstrap for the responsive UI components
- Express.js for the lightweight backend framework