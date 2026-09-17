import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  calculatorDefaults,
  purityOptions,
} from '../data/mockData';
import { estimateGoldLoan, formatINR } from '../utils/goldLoanCalculator';
import './GoldLoanCalculator.css';

function GoldLoanCalculator() {
  const [goldWeight, setGoldWeight] = useState(calculatorDefaults.goldWeight);
  const [goldPurity, setGoldPurity] = useState(calculatorDefaults.goldPurity);
  const [marketGoldRate, setMarketGoldRate] = useState(
    calculatorDefaults.marketGoldRate,
  );

  const estimate = useMemo(
    () =>
      estimateGoldLoan({
        goldWeight,
        goldPurity,
        marketGoldRate,
        loanToValueRatio: calculatorDefaults.loanToValueRatio,
      }),
    [goldWeight, goldPurity, marketGoldRate],
  );

  return (
    <section className="section calculator-section" id="calculator">
      <div className="container calculator">
        <div className="calculator__intro">
          <p className="section__eyebrow">Loan Estimator</p>
          <h2 className="section__title">Estimate Your Gold Loan</h2>
          <p className="section__lead">
            Use this sample calculator to explore an indicative estimate. It uses simple
            mock rules for practice and is not a real lending quote.
          </p>
        </div>

        <div className="calculator__panel">
          <form className="calculator__form" onSubmit={(event) => event.preventDefault()}>
            <label className="field">
              <span>Gold Weight (grams)</span>
              <input
                type="number"
                min="1"
                step="0.1"
                value={goldWeight}
                onChange={(event) => setGoldWeight(event.target.value)}
              />
            </label>

            <label className="field">
              <span>Gold Purity</span>
              <select
                value={goldPurity}
                onChange={(event) => setGoldPurity(Number(event.target.value))}
              >
                {purityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Market Gold Rate (₹ / gram)</span>
              <input
                type="number"
                min="1"
                step="1"
                value={marketGoldRate}
                onChange={(event) => setMarketGoldRate(event.target.value)}
              />
            </label>
          </form>

          <div className="calculator__results">
            <div className="calculator__result">
              <span>Estimated Gold Value</span>
              <strong>{formatINR(estimate.estimatedGoldValue)}</strong>
            </div>
            <div className="calculator__result">
              <span>Estimated Loan Amount</span>
              <strong>{formatINR(estimate.estimatedLoanAmount)}</strong>
            </div>
            <p className="calculator__disclaimer">
              Demo estimate only. Sample rule: purity factor × weight × rate, then 75% LTV.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoldLoanCalculator;
