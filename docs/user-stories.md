# User Stories with Acceptance Criteria

## S-1 — Calculate monthly payment (J-1) — Implemented
As a Prospective Borrower, I want to calculate a fixed monthly loan payment, so that I can assess affordability.
- Given $120,000, 6% annual interest and 10 years, when I calculate, then the monthly payment rounds to $1,332.25.
- Given $1,200, 0% interest and 1 year, when I calculate, then the payment is $100.00.
- Given $100, 12% annual interest and one month (1/12 year), when I calculate, then the payment is $101.00.

## S-2 — Show total cost (J-2) — Implemented
As a Prospective Borrower, I want to see total interest and repayment, so that I can understand the total cost of borrowing.
- Given valid inputs, when I calculate, then the app displays principal, total interest and total repayment in USD with two decimals.
- Given zero interest, when I calculate, then total interest is $0.00.

## S-3 — View amortization schedule (J-3) — Implemented
As a Budget Planner, I want a monthly principal and interest schedule, so that I can understand how the outstanding balance declines.
- Given a valid 10-year loan, when I calculate, then the schedule contains 120 rows, one for each month.
- Given any valid loan, when I inspect the final row, then the outstanding balance is $0.00.

## S-4 — Recover from invalid input (J-1) — Implemented
As a Prospective Borrower, I want understandable validation errors, so that I can correct inputs without trusting an incorrect estimate.
- Given an empty field, when I calculate, then I see "Please complete all three fields." and prior results disappear.
- Given a loan amount of 0 or less, when I calculate, then I see an amount validation message and no schedule.
- Given a negative rate or rate above 100%, when I calculate, then I see a rate validation message and no schedule.
- Given a tenure of 0, over 50 years, or not expressible as whole months, when I calculate, then I see a tenure validation message and no schedule.
- Given an error, when I correct the values and calculate again, then valid results return.

## S-5 — Reset the calculation (J-1) — Implemented
As a Prospective Borrower, I want to restore default values, so that I can start a new estimate.
- Given modified inputs or an error, when I select Reset, then the inputs return to $250,000, 6.5% and 20 years, the error clears, and default results display.

## S-6 — Compare saved scenarios (J-2) — Not implemented
As a Prospective Borrower, I want to save and compare multiple loan scenarios, so that I can decide which terms suit me best.
