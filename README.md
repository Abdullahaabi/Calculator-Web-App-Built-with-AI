# FinCalc — Loan Planner

A browser-based fixed-rate amortizing loan calculator for prospective borrowers and household budget planners. I chose this calculator because loan affordability is a concrete user problem and offers meaningful opportunities to demonstrate input validation, product traceability and edge-case testing.

## Prerequisites
Node.js 20+ and npm.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (normally http://localhost:5173).

## Tests
```bash
npm test
npm run build
```

## Technology
Vanilla JavaScript, CSS and Vite. No accounts, API keys, or backend required.

## AI coding tool and model
ChatGPT (OpenAI GPT-6) generated the initial source, documentation and tests. Include the full original ChatGPT session export in `transcripts/` before submission; do not substitute an AI-generated summary. Verify whether any other tools or models were used and list them here.

## Hand changes
No hand-written code changes were made during the initial generation. Update this section if you manually edit files afterward.

## Assumptions
- Currency is USD, illustrative only; no currency conversion.
- Fixed annual nominal interest rate, compounded monthly, with equal monthly installments.
- Loan term is supplied in years, supporting increments of one whole month.
- Maximum term is 50 years; principal must be positive and at most 1 trillion; rate is 0–100%.
- No taxes, fees, insurance, prepayment, variable rates or lender-specific rounding are included.
- Calculations retain full floating-point precision; display rounds to two decimals. The last installment can differ slightly to clear floating-point residuals.
- No user data is stored or transmitted.

## Product documentation
- [App Roles](docs/app-roles.md)
- [Jobs To Be Done](docs/jobs-to-be-done.md)
- [User Stories and Acceptance Criteria](docs/user-stories.md)

## Limitations
The UI is English-only. Saved scenario comparisons are not implemented. The schedule is scrollable rather than paginated. Results are estimates, not lending offers.
