import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false); 

    const handleTransfer = async () => {
        if (amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        setLoading(true); 
        try {
            const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount: parseFloat(amount)
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
        
            setAmount(0);
            alert("Transfer successful!");
        } catch (error) {
           
            console.error("Transfer failed:", error.response || error.message);  
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                            </div>
                            <h3 className="text-2xl font-semibold">{name}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="amount"
                                >
                                    Amount (in Rs)
                                </label>
                                <input
                                    onChange={(e) => setAmount(e.target.value)}
                                    type="number"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    id="amount"
                                    placeholder="Enter amount"
                                    value={amount}
                                />
                            </div>

                            <button
                                onClick={handleTransfer}
                                disabled={loading}
                                className={`justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full hover:bg-blue-600 duration-600  ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                            >
                                {loading ? "Processing..." : "Initiate Transfer"}
                            </button>

                            <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-gray-300 hover:bg-gray-400 duration-500 text-black">
                                <Link to={"/dashboard"}>Go Back</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
