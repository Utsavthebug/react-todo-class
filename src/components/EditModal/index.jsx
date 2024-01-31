import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


const EditModal = ({
    modalIsOpen,
    setIsOpen
}) => {

    function closeModal() {
      setIsOpen(false);
    }
  

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Edit Modal"
      overlayClassName="Overlay"
    >
     <div className='flex gap-y-5 flex-col'>
        <p className=' font-medium text-[1.5rem]'>Are you sure you want to delete this todo?</p>

        <div className='flex gap-x-5'>
        <button className=' bg-red1 btnCls font-normal'>
            Delete
        </button>

        <button onClick={closeModal} className=' bg-green-700  btnCls font-normal'>
            Cancel
        </button>
        </div>

     </div>
    </Modal>
  )
}

export default EditModal