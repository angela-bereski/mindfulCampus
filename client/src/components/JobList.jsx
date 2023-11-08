

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../home.css';
import { useParams, useNavigate } from 'react-router-dom';

const JobList = () => {
  const [list, setList] = useState([]);
  const localUser = localStorage.getItem('loggedUser');
  const loggedUser1 = JSON.parse(localUser);
  const { id } = useParams();
  const navigate = useNavigate();

  const filterExpiredJobs = (jobs) => {
    const currentTime = new Date().getTime();
    return jobs.filter((job) => {
      const jobPostedTime = new Date(job.postedOn).getTime();
      const daysDifference = (currentTime - jobPostedTime) / (1000 * 60 * 60 * 24);
      return daysDifference <= 90;
    });
  };

  useEffect(() => {
    const fetchAndFilterJobs = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/getAllJobs', { withCredentials: true });
        const sortedList = res.data.sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));
        const nonExpiredJobs = filterExpiredJobs(sortedList);
        setList(nonExpiredJobs);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAndFilterJobs();

    const interval = setInterval(() => {
      fetchAndFilterJobs();
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const deleteJob = (id) => {
    const confirmation = window.confirm('Are you sure you want to delete this job posting?');
    if (confirmation) {
      axios
        .delete(`http://localhost:8000/api/deleteJob/${id}`)
        .then((res) => {
          console.log('Job deleted', res.data);
          setList((prevList) => prevList.filter((job) => job._id !== id));
          navigate('/jobboard');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="homeHome flex-row flex p-1 justify-around flex-wrap rounded">
      <p className="title1">Current Job Openings</p>
      <div className="descripA flex-row flex p-1 lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-around flex-wrap rounded">
        {list.map((job, i) => (
          <div className="borderPeep" key={i}>
            <p>Position: {job.title}</p>
            <p>Employer: {job.nameOfBizHiring}</p>
            <p>Description: {job.description}</p>
            <p>Contact: {job.contact}</p>
            <p>Job Posted On: {formatDate(job.postedOn)}</p>
            {loggedUser1.firstName === job.createdBy.name ? (
              <button className="navButtonMini" onClick={() => deleteJob(job._id)}>
                delete
              </button>
            ) : null} &nbsp; &nbsp;
            {loggedUser1.firstName === job.createdBy.name ? (
              <button className='navButtonMini' onClick={() => navigate(`/editJob/${job._id}`)}>edit</button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
