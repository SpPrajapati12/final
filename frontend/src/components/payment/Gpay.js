import { useCallback } from "react";

import GooglePayButton from "@google-pay/button-react"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import useRazorpay from "react-razorpay";


const Gpay = () => {



    return (
        <>
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '100.00',
                        currencyCode: 'USD',
                        countryCode: 'US',
                    },
                    shippingAddressRequired: true,
                    callbackIntents: ['PAYMENT_AUTHORIZATION']
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                }}
                onPaymentAuthorized={paymentData => {
                    console.log('PAyment Authorised Success', paymentData)
                    return { transactionState: 'SUCCESS' }
                }}
                existingPaymentMethodRequired='false'
                buttonColor='white'
                buttonType='Buy'
            />

            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "1.99",
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        console.log(data)
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                />
            </PayPalScriptProvider>
        </>
    )
}

export default Gpay