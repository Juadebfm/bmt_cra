import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Button from "../components/Lcomp/Button";
import Badge from "../components/Lcomp/Badge";
import LatestNews from "../components/Hcomp/LatestNews";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

// import Swal from "sweetalert2";

const Donation = () => {
  console.log("Donation component rendered");

  // Animation initializer
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [donationAmount, setDonationAmount] = useState(0); // Initialize with 0 or any default value
  const [activeButton, setActiveButton] = useState("enterAmount");
  const [activeDiv, setActiveDiv] = useState("one");
  const [currency, setCurrency] = useState("NGN");
  const [amount, setAmount] = useState("");

  const [error, setError] = useState("");

  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [secondDivError, setSecondDivError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Add this state for the phone number input

  // Function for switching between div one and two
  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === "enterAmount") {
      setActiveDiv("one");
    } else {
      setActiveDiv("two");
    }
  };

  // Function for the form validation of first button in the donation form pipeline
  const amountRegex = /^$|^[1-9][0-9]*$/; // Regex to validate only numbers
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (amount !== "") {
      if (!amountRegex.test(amount)) {
        setError("Input a valid amount");
      } else if (currency === "NGN" && parseInt(amount) < 1000) {
        setError("Minimum amount for NGN is ₦1000");
      } else if (currency === "USD" && parseInt(amount) < 10) {
        setError("Minimum amount for USD is $10");
      } else {
        setActiveDiv("two");
        setActiveButton("addInformation");
        setError(""); // Clear any previous error messages
      }
    } else {
      setError("Please type an amount.");
    }
  };

  // Function to make api call for flutterwave
  const handleSecondProceed = async () => {
    console.log("Proceed button clicked");

    if (!fullNameInput.trim() || fullNameInput.trim().length < 3) {
      console.log("Full Name validation failed");
      setSecondDivError("Full Name should be at least 3 characters");
    } else if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
      console.log("Email validation failed");
      setSecondDivError("Please enter a valid email address");
    } else if (!phoneNumber || phoneNumber.length < 7) {
      console.log("Phone number validation failed");
      setSecondDivError("Please enter a valid phone number");
    } else {
      console.log("Validation passed");
      setSecondDivError("");

      const txRef = generateTxRef(); // Function to generate random 10 digit alphanumeric id
      const redirectUrl = `https://scfn-luth-transplant.sicklecellfoundation.com/donation`; // Construct redirect URL with tx_ref


      const formData = new FormData();
      formData.append("name", fullNameInput);
      formData.append("email", emailInput);
      formData.append("redirect_url", redirectUrl); // Use the constructed redirect URL

      formData.append("phonenumber", phoneNumber); // Add phone number to form data
      formData.append("currency", currency); // Use selected currency state
      formData.append("tx_ref", txRef);
      formData.append("amount", donationAmount.toString()); // Use donation amount state

      const apiKey =
        "eyJpdiI6IjJKbm5aeE9lNTRNWlc2a1pKK3NuUlE9PSIsInZhbHVlIjoiQ2JKTEdpcmpoNUZwUTVwMnJVZHlSR1lTMmgvV1hGRk5zdWhzbTZyM29VVlJhK3VVb21BcFJHbzU5aXFvT2NlUiIsIm1hYyI6IjUwMDFlM2VhM2IwYTFlYTY3YTE3YTQ2MTJmZWE1NTE1Yjc2YTExOGIzYWE2YTE4MzZlNTk0OTAwZDhmZGI4MTUiLCJ0YWciOiIifQ==";

      try {
        const requestOptions = {
          method: "POST",
          body: formData,
          redirect: "follow",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        };

        const response = await fetch(
          "https://www.sicklecellfoundation.com/scfn-luth-api/api/admin/initialize-payment",
          requestOptions
        );

        if (response.ok) {
          // Handle success response
          const result = await response.json();
          console.log(result);
          // Check if the link exists in the response data
          if (
            result &&
            result.response &&
            result.response.data &&
            result.response.data.link
          ) {
            const paymentLink = result.response.data.link;

            // Store tx_ref in localStorage for later use
            localStorage.setItem("tx_ref", txRef);

            // Redirect to the received link
            window.location.href = paymentLink;
          } else {
            console.error("Failed to retrieve payment link");
          }
        } else {
          // Handle error response
          console.error("Failed to initialize payment");
        }
      } catch (error) {
        // Handle fetch errors
        console.error("Error occurred while initializing payment:", error);
      }
    }
  };

  // Function to generate random 10 digit alphanumeric id
  const generateTxRef = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const txRefParam = urlParams.get("tx_ref");
    const statusParam = urlParams.get("status");
  
    if (txRefParam && statusParam === "successful") {
      verifyPayment(txRefParam);
    }
  }, []);
  

  const verifyPayment = async (txRef) => {
    try {
      const apiKey =
        "eyJpdiI6IjJKbm5aeE9lNTRNWlc2a1pKK3NuUlE9PSIsInZhbHVlIjoiQ2JKTEdpcmpoNUZwUTVwMnJVZHlSR1lTMmgvV1hGRk5zdWhzbTZyM29VVlJhK3VVb21BcFJHbzU5aXFvT2NlUiIsIm1hYyI6IjUwMDFlM2VhM2IwYTFlYTY3YTE3YTQ2MTJmZWE1NTE1Yjc2YTExOGIzYWE2YTE4MzZlNTk0OTAwZDhmZGI4MTUiLCJ0YWciOiIifQ==";
      const verifyURL = `https://www.sicklecellfoundation.com/scfn-luth-api/api/admin/verify-payment?tx_ref=${txRef}`;
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        redirect: "follow",
      };

      const response = await fetch(verifyURL, requestOptions);
      if (response.ok) {
        const result = await response.text();
        console.log("Verification successful:", result);
        handleVerificationSuccess(result);
      } else {
        console.error("Failed to verify payment");
      }
    } catch (error) {
      console.error("Error occurred during verification:", error);
    }
  };

// Function where you handle the successful verification
const handleVerificationSuccess = (response) => {
  console.log("Verification success response:", response);

  // Extracting the relevant data from the response
  const transactionData = response?.response?.data;

 alert("syccess")
};


  return (
    <>
      <section className="h-max flex flex-col lg:flex-row items-center justify-center px-[25px] md:px-14 lg:px-16 gap-10 md:gap-20 mt-10 ">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="w-full lg:w-1/2 h-full p-0 mt-24"
        >
          <img
            src="./assets/bmt/donation_latest.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="w-full lg:w-[90%] text-[34px] lg:text-[44px] leading-[1.2] capitalize font-bold text-primary_red text-start">
            This is a CALL TO ACTION! BE A HERO!
            <br /> CONTRIBUTE TODAY!
          </h2>
          <p className="w-full text-[18px] md:text-[20px] text-start leading-normal mt-8">
            Your contributions will help subsidise the cost of this life-saving
            procedure for the vast majority of Nigerians living with sickle cell
            disorder, giving them access to this cure.
            <br />
            <br /> Help make this cure a reality for many! 
            <br />
            <br /> THANK YOU!
          </p>
          <Link
            to="#donate"
            className="md:flex md:items-center md:justify-center lg:block"
          >
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/90 trans_animate tracking-wider block text-white mt-7 w-full md:w-[60%] lg:w-auto"
              text="Donate Now"
            />
          </Link>
        </div>
      </section>
      <Badge />
      <div id="donate" className="my-8"></div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-[25px] md:px-14 lg:px-16 gap-10 md:gap-20 mt-20">
        <div className="w-full lg:w-1/2 box_shadow p-[1.5rem] lg:p-[3rem] rounded-2xl">
          <div className="w-full m-auto flex items-center justify-center">
            <button
              className={`w-1/2 py-[14px] ${
                activeButton === "enterAmount"
                  ? "bg-primary_red text-white font-bold"
                  : "text-primary_red font-bold"
              }`}
              onClick={() => handleButtonClick("enterAmount")}
            >
              Enter Amount
            </button>
            <button
              className={`w-1/2 py-[14px] ${
                activeButton === "addInformation"
                  ? "bg-primary_red text-white font-bold"
                  : "text-primary_red font-bold"
              }`}
              onClick={() => handleButtonClick("addInformation")}
            >
              Add Your Information
            </button>
          </div>
          {/* DIV ONE */}
          <div className={activeDiv === "one" ? "block mt-10" : "hidden"}>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[20px] font-bold w-max">
                Online Donation
              </span>
              <p className="leading-normal mt-2 text-[18px] md:text-[20px] text-center md:text-start">
                How much would you like to donate? As a contributor to SCFN /
                LUTH BMT program, your donation will go directly to subsidising
                the transplant procedure
              </p>
            </div>
            <form
              className="mt-10 w-full p-0 lg:p-10 space-y-10"
              onSubmit={handleFormSubmit}
            >
              {error && <p className="text-red-500 text-center">{error}</p>}

              <div className="flex flex-col items-start justify-start w-full relative">
                <label htmlFor="currency">Select Currency</label>
                <select
                  name=""
                  id=""
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full py-[14px] mt-2 border border-gray-400 rounded-md px-3 appearance-none cursor-pointer relative"
                >
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                  {/* <option value="USD">EUR</option>
                  <option value="USD">GBP</option> */}
                </select>
                <div className="absolute inset-y-0 right-[20px] top-[40%] flex items-center pl-3 pointer-events-none">
                  {/* Adjust positioning using pl-3 for additional space */}
                  <img
                    src="/assets/bmt/chevron_down.svg"
                    alt="chevron"
                    width={17}
                    height={17}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="amount">Enter Amount</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    const inputVal = e.target.value;
                    if (!amountRegex.test(inputVal)) {
                      setError("Input a valid amount");
                    } else {
                      setError(""); // Clear error message when valid input
                      setAmount(inputVal);
                      setDonationAmount(parseInt(inputVal)); // Update donation amount state
                    }
                  }}
                  placeholder="Type Here"
                  className={`w-full py-[14px] mt-2 border ${
                    error ? "border-primary_red" : "border-gray-400"
                  } rounded-md px-3`}
                />
              </div>
              <div className="flex justify-center">
                <Button
                  classes="px-[75px] py-[14px] bg-primary_red font-Lexend font-bold rounded-[4px] hover:bg-primary_red/90 trans_animate tracking-wide mt-5 text-white w-full lg:w-[60%]"
                  text="Proceed"
                />
              </div>
            </form>
          </div>
          {/* DIV TWO */}
          <div className={activeDiv === "two" ? "block mt-10" : "hidden"}>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[20px] font-bold w-max">
                Who&apos;s giving today?
              </span>
              <p className="mt-2 text-[18px] text-center">
                We’ll never share this information with anyone.
              </p>
            </div>
            {secondDivError && (
              <p className="text-red-500 text-center mt-5 text-[18px]">
                {secondDivError}
              </p>
            )}
            <form className="mt-10 w-full p-5 lg:p-10 space-y-5">
              {/* Full Name Input */}
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  value={fullNameInput}
                  onChange={(e) => setFullNameInput(e.target.value)}
                  placeholder="Enter Full Name"
                  className={`w-full py-[14px] mt-2 border ${
                    secondDivError &&
                    (!fullNameInput.trim() || fullNameInput.trim().length < 3)
                      ? "border-red-500"
                      : "border-gray-400"
                  } rounded-md px-3`}
                />
              </div>
              {/* Email Input */}
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter Email Address"
                  className={`w-full py-[14px] mt-2 border ${
                    secondDivError && !/^\S+@\S+\.\S+$/.test(emailInput)
                      ? "border-red-500"
                      : "border-gray-400"
                  } rounded-md px-3`}
                />
              </div>
              {/* Phone Number Input */}
              {/* Phone Number Input */}
              <div className="flex flex-col items-start justify-start w-full">
                <label htmlFor="tel">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter Phone Number"
                  className={`w-full py-[14px] mt-2 border ${
                    secondDivError ? "border-red-500" : "border-gray-400"
                  } rounded-md px-3`}
                />
              </div>
            </form>
            <div className="mt-8 px-5 lg:px-10">
              <div className="flex items-center justify-between text-[20px] font-bold w-full bg-[#F5F6F8] px-6 py-4">
                <span className="text-base md:text-[18px]">Donation Total</span>
                <span className="text-base md:text-[18px]">
                  {currency === "NGN"
                    ? `₦${donationAmount.toLocaleString()}`
                    : `$${donationAmount.toLocaleString("en-US")}`}
                </span>
              </div>
            </div>
            <div
              onClick={handleSecondProceed}
              className="flex justify-center mt-7"
            >
              <Button
                classes="px-[75px] py-[14px] bg-primary_red font-Lexend font-bold rounded-[4px] hover:bg-primary_red/90 trans_animate tracking-wide mt-5 text-white w-full lg:w-[60%]"
                text="Proceed"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full p-0">
          <img src="./assets/bmt/new_donation.png" alt="" className="w-full" />
        </div>
      </div>
      <section className="h-max flex flex-col-reverse lg:flex-row items-center justify-center px-[25px] md:px-14 lg:px-16 gap-20 my-20">
        <div
          data-aos="fade-right"
          data-aos-duration="1100"
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <span className="text-start text-[34px] md:text-[44px] mb-5 lg:text-[18px] text-primary_red font-bold leading-[1.2]">
            See what Happens When You Help
          </span>
          <h2 className="w-full md:w-[90%] text-[20px] lg:text-[28px] text-start leading-[1.2] capitalize font-bold text-primary_dark">
            What We Do When You Donate To us
          </h2>
          <p className="w-full text-[18px] md:text-[20px] text-start leading-normal mt-3">
            Your donation help us subsidize the cost of transplant for persons
            that are in need of quality, safe and affordable stem cell
            transplantation. <br /> You become an integral part of the life
            changing journey when you donate.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-full lg:w-1/2 h-full p-0"
        >
          <img
            src="./assets/bmt/donation_what_we_do.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
      </section>
      <LatestNews />
    </>
  );
};

export default Donation;
