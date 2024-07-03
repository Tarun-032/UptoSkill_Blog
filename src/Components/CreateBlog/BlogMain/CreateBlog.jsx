import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateBlog.css';
import JoditEditor from 'jodit-react';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [aiTitle, setAiTitle] = useState('');
  const [aiContent, setAiContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Image:', image);
  };

  const handleGenerateAiPost = () => {
    // TO DO: implement AI post generation logic here
    setAiTitle('AI Generated Title');
    setAiContent('AI Generated Content');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="mt-5 p-4 bg-light rounded shadow">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  style={{ height: '40px', fontSize: '18px' }}
                />
              </div>
              <div className="form-group mb-3 contentt">
                <label htmlFor="content" className="form-label">Content</label>
                <JoditEditor
                  value={content}
                  onChange={handleContentChange}
                  config={{
                    uploader: {
                      insertImageAsBase64URI: true,
                    },
                    toolbar: [
                      'source',
                      '|',
                      'bold',
                      'italic',
                      'underline',
                      'strikethrough',
                      '|',
                      'superscript',
                      'subscript',
                      '|',
                      'ul',
                      'ol',
                      '|',
                      'outdent',
                      'indent',
                      '|',
                      'font',
                      'fontsize',
                      '|',
                      'text',
                      'color',
                      '|',
                      'align',
                      '|',
                      'image',
                      '|',
                      'link',
                      'unlink',
                      '|',
                      'undo',
                      'redo',
                    ],
                  }}
                  className="large-editor"
                />
              </div>
              <div className="form-group mb-3 ima">
                <label htmlFor="image" className="form-label">Upload Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="image"
                  onChange={handleImageChange}
                  style={{ height: '40px', fontSize: '18px' }}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary" style={{ fontSize: '18px' }}>
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mt-5 p-4 bg-light rounded shadow">
            <div className="title-bar">
              <h5>AI Generated Post</h5>
              <button className="btn btn-primary" onClick={handleGenerateAiPost}>
                Generate AI Post
              </button>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="ai-title" className="form-label">AI Title</label>
              <input
                type="text"
                className="form-control"
                id="ai-title"
                value={aiTitle}
                readOnly
                style={{ height: '40px', fontSize: '18px' }}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="ai-content" className="form-label">AI Content</label>
              <textarea
                className="form-control"
                id="ai-content"
                value={aiContent}
                readOnly
                style={{ height: '600px', fontSize: '18px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
