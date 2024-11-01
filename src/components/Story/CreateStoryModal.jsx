import React from 'react'
import { Modal } from '../../utils/Modal'
import { FormStory } from '../Form/FormStory'

export const CreateStoryModal = ({ isOpen, onClose, onSubmit, isSubmitting }) => {

  return (
    <Modal isOpen={isOpen} closeModal={onClose} title="Crear Historia">
        <FormStory 
            onStoryCreated={onSubmit} 
            isSubmitting={isSubmitting}
        />
    </Modal>
  )
}
