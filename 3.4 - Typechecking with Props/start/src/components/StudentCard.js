import React from 'react';

const Course = ({ name }) => <div className="st-course-card">{name}</div>;

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <div className="st-name">{student.name}</div>
      <div className="st-id">ID: {student.id}</div>
      <div className="st-courses">
        {student.courses.map((c, i) => (
          <Course name={c} key={i} />
        ))}
      </div>
      <div className={student.active ? 'st-active on' : 'st-active'} />
    </div>
  );
};

export default StudentCard;
