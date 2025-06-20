import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
 // Assuming you have a navbar component

const ViewProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = '237b5d49ddf0eebcbc17a5a959f640a6ebaa081819198ceeef24423cd38f3512';
  

  const fetchProjects = async () => {
    setLoading(true); 
    try {
      const res = await axios.get('https://subpf-1.onrender.com/api/get', {
        headers: {'x-api-key': apiKey },
        withCredentials: true
      });
      
      setProjects(res.data.project);
    } catch (err) {
      console.error(err);
    }finally {
    setLoading(false); // Stop loading
  }
  };

  useEffect(() => {
    if (apiKey) {
      fetchProjects();
    }
  }, [apiKey]);

  return (
    <>
      {loading ? (
  <div className="text-center py-5">
    <span className="spinner-border text-primary" role="status" />
    <p className="mt-2">Loading your projects...</p>
  </div>
) : (
  <>
    <Container className="my-5">
        <h3 className="mb-4">My Projects</h3>
        {projects.length === 0 && <p>No projects found.</p>}
        {projects.map(project => (
          <Card className="mb-3 p-3 shadow-sm" key={project._id}>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <p><strong>Tools:</strong> {project.tools}</p>
            <a href={project.sourceCode} target="_blank" rel="noreferrer">Source</a> {' '}<br></br>
            <a href={project.hostLink} target="_blank" rel="noreferrer">Live</a>
          </Card>
        ))}
      </Container>
    </>
  
)}
    </>
  );
};

export default ViewProject;
