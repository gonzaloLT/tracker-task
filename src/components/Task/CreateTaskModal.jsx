import React from 'react';
import { Modal } from '../../utils/Modal';
import { FormTask } from '../Form/FormTask';

export const CreateTaskModal = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
    return (
        <Modal title="Crear Tarea" isOpen={isOpen} closeModal={onClose}>
        <FormTask
            onTaskCreated={onSubmit}
            isSubmitting={isSubmitting}
        />
    </Modal>
    )
}