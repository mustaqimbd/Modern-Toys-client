import { useState } from 'react';
import Modal from 'react-modal';
import AddToy from "../Pages/AddToy";
const ToyModal = ({ toy }) => {
    // console.log(toy, "iddd");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>Update</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2 className='text-center text-3xl font-bold'>Update Toy</h2>
                <div>
                    <AddToy toy={toy} closeModal={closeModal} />
                </div>
                <p>Modal content goes here...</p>
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Save</button> */}
            </Modal>
        </div>
    );
};
export default ToyModal;
