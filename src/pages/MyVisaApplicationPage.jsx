import MyAppliedVisa from "../components/MyAppliedVisa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import NoDataFound from "../components/NoDataFound";

const MyVisaApplicationPage = () => {
    const [myAppliedVisas, setMyAppliedVisa] = useState([]);
    // console.log(myAppliedVisas);
    const {user, root_dir} = useContext(AuthContext);

    useEffect(()=> {
        fetch(`${root_dir}/applications/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyAppliedVisa(data)
        })
    },[])

    return (
        <section className='max-w-8xl mx-auto px-5'>
            {
                myAppliedVisas.length > 0 ? <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    myAppliedVisas.map(myAppliedVisa => <MyAppliedVisa
                        key={myAppliedVisa._id}
                        myAppliedVisa={myAppliedVisa}
                    ></MyAppliedVisa>)
                }
                </div> : <NoDataFound></NoDataFound>
            }
        </section>
    );
};

export default MyVisaApplicationPage;