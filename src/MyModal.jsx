import React from 'react';

const MyModal = () => {
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <button className="btn" onClick={() => window.my_modal_5.close()}>Close</button>
        </div>
      </div>
    </dialog>
        </div>
    );
};

export default MyModal;