"use client";
import Image from "next/image";
import { useState } from "react";
import InputForm from "@/app/components/InputForm/InputForm.component";
import RadioInputForm from "@/app/components/RadioInputform/RadioInputForm";
import callIcon from "../../assets/images/icon-calculator.svg";
import emptyResultIcon from "../../assets/images/illustration-empty.svg";

const MortgageCalculator = () => {
  const mortgageTypeOptions = ["Repayment", "Interest Only"];

  const [mortgageData, setmortgageData] = useState({ mortgageAmount: "", mortgageTerm: "", interestRate: "", mortgageType: "" });
  const [mortgageResult, setMortgageResult] = useState({ monthlyRepayment: "", totalRepayment: "" });
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [isResultAvailable, setIsResultAvailable] = useState(false);

  const clearForm = () => {
    setmortgageData({ mortgageAmount: "", mortgageTerm: "", interestRate: "", mortgageType: "" });
    setMortgageResult({ monthlyRepayment: "", totalRepayment: "" });
    setError({});
    setIsResultAvailable(false);
  }

  const handleMortgageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = event.target;
    if (type === "radio") {
      setmortgageData({ ...mortgageData, mortgageType: value });
    } else {
      setmortgageData({ ...mortgageData, [id]: value });
    }
  }

  const validatemortgageData = () => {
    const errors: { [key: string]: string } = {};
    if (!mortgageData.mortgageAmount) {
      errors.mortgageAmount = "This field is required";
    }
    if (!mortgageData.mortgageTerm) {
      errors.interestRate = "This field is required";
    }
    if (!mortgageData.interestRate) {
      errors.mortgageTerm = "This field is required";
    }
    if (mortgageData.mortgageType !== "Repayment" && mortgageData.mortgageType !== "Interest Only") {
      errors.mortgageType = "This field is required";
    }
    setError(errors);
    return Object.keys(errors).length === 0;
  }

  const formatRepayment = (repayment: number): string => {
  return repayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

  const calculateMortgageRepayment = () => {
    const mortgageAmount = parseFloat(mortgageData.mortgageAmount);
    const mortgageTerm = parseFloat(mortgageData.mortgageTerm);
    const interestRate = parseFloat(mortgageData.interestRate);
    const mortgageType = mortgageData.mortgageType;

    let monthlyRepayment = 0;
    let totalRepayment = 0;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const totalPayments = mortgageTerm * 12;

    if (mortgageType === "Repayment") {
      monthlyRepayment = mortgageAmount * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1));
    } else {
      monthlyRepayment = mortgageAmount * monthlyInterestRate;
    }
    totalRepayment = monthlyRepayment * totalPayments;

    setMortgageResult({ monthlyRepayment: formatRepayment(monthlyRepayment), totalRepayment: formatRepayment(totalRepayment)});
    setIsResultAvailable(true);
  };

  const FormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validatemortgageData()) {
      calculateMortgageRepayment();
    }
  }

  return (
    <div className="w-full max-w-5xl max-md:mx-0 max-md:my-0 m-8 flex flex-row max-lg:flex-col rounded-3xl shadow-md bg-white">
      <section className="w-full bg-white sm:rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-none">
        <header className="flex justify-between flex-row items-center px-8 py-8 pb-4">
          <h1 className="font-bold text-2xl text-slate900">Mortgage Calculator</h1>
          <button className="text-slate500 underline text-md hover:text-slate-700" onClick={clearForm}>Clear All</button>
        </header>
        <div className="px-8">
          <form className="flex flex-col gap-4" onSubmit={FormSubmit}>
            <InputForm
              id="mortgageAmount"
              type="string"
              label="Mortgage Amount"
              inputSymbol="$"
              value={mortgageData.mortgageAmount}
              errorMessage={error.mortgageAmount}
              onChange={handleMortgageChange}
            />
            <div className="flex justify-between gap-4 max-sm:gap-1 max-sm:flex-col">
              <InputForm
                id="mortgageTerm"
                type="string"
                label="Mortgage Term"
                inputSymbol="years"
                value={mortgageData.mortgageTerm}
                errorMessage={error.mortgageTerm}
                onChange={handleMortgageChange}
              />
              <InputForm
                id="interestRate"
                type="string"
                label="Interest Rate"
                inputSymbol="%"
                value={mortgageData.interestRate}
                errorMessage={error.interestRate}
                onChange={handleMortgageChange}
              />
            </div>
            <div className="mt-2">
              <label className="cursor-pointer text-slate700">Mortgage Type</label>
              <div className="flex flex-col gap-2 mt-2">
                {mortgageTypeOptions.map((option, index) => (
                  <RadioInputForm
                    key={index}
                    id={option}
                    label={option}
                    value={option}
                    name="mortgageType"
                    isChecked={mortgageData.mortgageType === option}
                    onChange={handleMortgageChange}
                  />
                ))}
              </div>
              {error.mortgageType && <p className="text-red text-sm">{error.mortgageType}</p>}
            </div>
            <div className="w-full flex max-lg:justify-start max-lg:items-center">
              <div className="my-8 h-full bg-lime hover:opacity-80 py-3 px-8 rounded-full flex flex-wrap justify-center align-center gap-4">
                <Image src={callIcon} alt="Call Icon" width={24} height={24} />
                <button
                type="submit"
                className="text-lg font-bold text-slate900">
                  Calculate Repayments
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className={`w-full bg-slate900 lg:rounded-r-3xl lg:rounded-bl-[84px] flex justify-center max-lg:h-full max-sm:px-4 md:rounded-b-3xl ${isResultAvailable ? "items-start" : "items-center"}`}>
        {isResultAvailable ? (
          <div className="flex flex-col m-8">
          <div>
            <h1 className="font-bold text-2xl mb-4 text-white">
              Your results
            </h1>
            <p className=" text-slate500 text-md mb-6 max-w-[37ch]">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              &quot;calculate repayments&quot; again.
            </p>
          </div>
          <div className="bg-lime rounded-md">
            <div className="w-full h-1"></div>
            <div className="bg-slate-dark rounded-md p-6">
              <div>
                <div>
                  <p className="text-slate300 text-base">
                    Your monthly repayment
                  </p>
                  <div className="pb-8 pt-4 border-b-[1px] border-white/10 mb-10">
                      <h2 className="text-6xl font-bold text-lime">${ mortgageResult.monthlyRepayment }</h2>
                  </div>
                </div>
                <div>
                  <p className="text-slate300 text-base">
                    Total you&apos;ll repay over the term
                  </p>
                  <h2 className="font-bold text-2xl text-white my-2">
                    ${mortgageResult.totalRepayment}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>) :
          <div className="flex justify-center items-center flex-col m-8 max-w-full md:max-w-[55ch] lg:max-w-[38ch]">
          <Image src={emptyResultIcon} alt="Empty Result Icon" width={196} height={196}/>
          <h1 className="font-bold text-2xl text-white w-full text-center mt-2">
            Result shown here
          </h1>
          <p className="w-full text-slate300 text-center mt-4 text-md max-lg:leading-8 leading-6">
            Complete the form and click &quot;calculate repayments&quot; to
            see what your monthly repayment would be.
          </p>
        </div>
        }
      </section>
    </div>
  );
};

export default MortgageCalculator;