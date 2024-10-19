import React from 'react';
import { Modal } from '../../utils/Modal';
import { EditTask } from '../Form/EditTask';

export const EditTaskModal = ({ isOpen, onClose, onSubmit, task, isSubmitting }) => (
    <Modal title="Actualizar Tarea" isOpen={isOpen} closeModal={onClose}>
        <EditTask
            task={task}
            onTaskUpdated={onSubmit}
            isSubmitting={isSubmitting}
        />
    </Modal>
);