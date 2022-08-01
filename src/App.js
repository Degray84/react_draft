import './App.css';

// import Carousel from './components/Carousel.jsx';
// import Collapse from './components/Collapse.jsx';
// import MyForm from './components/MyForm.jsx';
// import Component from './components/Component.jsx';
// import TodoBox from './components/14.Todo/TodoBox';
// import Card from './components/15.Functional/Card';
// import App_lesson from './components/16.Tabs/App_lesson';
// import ComponentModal from './components/17.Modal/ComponentModal';
// import Autocomplete from './components/19.Async/Autocomplete';
// import TodoBox from './components/20.TodoBox/TodoBox';
import '@toast-ui/editor/dist/toastui-editor.css';
import MarkdownEditor from './components/22.MarkDown/MarkdownEditor.jsx';


function App() {
  return (
    <div className="App">
      {/* <Carousel images={images} /> */}
      {/* <Collapse text={text} opened={false} /> */}
      {/* <MyForm /> */}
      {/* {<Component />} */}
      {/* <TodoBox /> */}
      {/* <Card>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>Text</Card.Text>
        </Card.Body>
      </Card> */}
      {/* <App_lesson /> */}
      {/* <ComponentModal /> */}
      {/* <Autocomplete /> */}
      {/* <TodoBox /> */}
      <MarkdownEditor onContentChange={console.log} />
    </div>
  );
}


// const images = ['https://picsum.photos/id/200/200/300', 'https://picsum.photos/id/51/200/300', 'https://picsum.photos/id/91/200/300'];
// const text = 'collapse me';

export default App;
