import React from 'react'
import { Link } from 'react-router-dom'

export const EpicCard = ({epic}) => {
  return (
    <Link to={`/my-projects/${epic.project}/${epic._id}`}>
      <p>Nombre de epica: {epic.name}</p>
      <p>Descripcion: {epic.description}</p>
      <p>Icon: {epic.icon}</p>
    </Link>
  )
}
