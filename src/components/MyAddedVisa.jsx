import { useContext } from "react";
import { FaTrashRestore } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";
import { AuthContext } from "../provider/AuthProvider";

const MyAddedVisa = ({ myAddedVisa, handleDeleteVisa, handleShowModal }) => {
    const { _id, countryImage, countryFlag, countryName, processingTime, validity, applicationMethod, visaType, visaFee, ageRestriction, description } = myAddedVisa;

    const {isDarkMode} = useContext(AuthContext);

    return (
        <tr className={`border-b  ${isDarkMode ? 'text-[#F2F2F2] border-white hover:bg-gray-600' : 'text-[#003366] border-[#003366] hover:bg-[#003366]/20'}`}>
            <td><img className="w-28 mx-auto" src={countryImage} /></td>
            <td><p className="text-lg">{countryName}</p></td>
            <td><p className="text-lg">{processingTime}</p></td>
            <td><p className="text-lg">{validity}</p></td>
            <td><p className="text-lg">{applicationMethod}</p></td>
            <td><p className="text-lg">${visaFee}</p></td>
            <td>
                <div className='flex flex-col gap-2'>
                    <button onClick={() => handleDeleteVisa(_id)} className='w-full px-4 py-2 rounded-sm bg-red-500 text-[#F2F2F2] active:scale-95 font-semibold font-inter'><FaTrashRestore className="text-2xl mx-auto"></FaTrashRestore></button>
                    <button onClick={() => { document.getElementById('update_modal').showModal(); handleShowModal(_id) }} className={`w-full px-4 py-2 rounded-sm text-[#F2F2F2] active:scale-95 font-semibold font-inter ${isDarkMode ? 'bg-[#FF6F3F]' : 'bg-[#003366]'}`}><MdOutlineUpdate className="text-2xl mx-auto"></MdOutlineUpdate></button>
                </div>
            </td>
        </tr>
    );
};

export default MyAddedVisa;