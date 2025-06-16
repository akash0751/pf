const Projects = () => {
  
  return (
    
      <div className="container">
        <h2 className="mt-4">Projects</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">TaskMaster</h5>
            <p className="card-text">A task management app with boards, drag-and-drop, and real-time updates.</p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">GPS Tracker</h5>
            <p className="card-text">A real-time location tracking app using React, Node.js, and WebSocket.</p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">RecipeBox</h5>
            <p className="card-text">Full-stack recipe management with meal planning and shopping lists.</p>
          </div>
        </div>
      </div>
    
  );
};

export default Projects;