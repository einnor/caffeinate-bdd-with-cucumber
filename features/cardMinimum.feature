Feature: Card Minimum

    Feature Description

    Scenario: Total charge is over the $2 credit card minimum
        Given Maria orders $3 of coffee from Li
        When Maria pays with a credit card
        Then Li should process the payment

    Scenario: Total charge is under the $2 credit card minimum
        Given Maria orders $1 of coffee from Li
        When Maria pays with a credit card
        Then Li should not process the payment

    Scenario: Total charge is x
        Given Maria orders $<price> of coffee from Li
        When Maria pays with a credit card
        Then The status of the payment is "<result>"

        Examples:
        | price | result |
        | 3     | true   |
        | 1     | false  |
        | 0     | false  |
        | 100   | true   |
