import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Card, Container } from 'react-bootstrap';
 // Assuming you have a navbar component

const ViewProject = () => {
  const [projects, setProjects] = useState([]);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTAwYjk5ZTc3OWUzM2EwMGUyNWE1YSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzUwMDgxMDYyLCJleHAiOjE3NTAwODQ2NjJ9.WRis0USsDhBlUvWHZSRe_R-rkNc77hXGVVeOJwXwG20';
  const decoded = token ? jwtDecode(token) : null;
  const userId = decoded?.id;

  const fetchProjects = async () => {
    try {
      const res = await axios.get('https://subpf-1.onrender.com/api/get', {
        headers: { "authorization": `Bearer ${token}` },
        withCredentials: true
      });
      const userProjects = res.data.project.filter(project => project.user === userId);
      setProjects(userProjects);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchProjects();
    }
  }, [userId]);

  return (
    <>
      
      <Container className="my-5">
        <h3 className="mb-4">My Projects</h3>
        {projects.length === 0 && <p>No projects found.</p>}
        {projects.map(project => (
          <Card className="mb-3 p-3 shadow-sm" key={project._id}>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <p><strong>Tools:</strong> {project.tools}</p>
            <a href={project.sourceCode} target="_blank" rel="noreferrer">Source</a> |{' '}
            <a href={project.hostLink} target="_blank" rel="noreferrer">Live</a>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default ViewProject;
