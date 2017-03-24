var taskDetailsPage = {

	dialog: '#dialog-stack',
	dialogDisplayedClass: 'displayed',
	
	offerHeader: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-header',
	offerMakeHeaderValue: 'Make an Offer',
	offerComment: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div.anchovy-form-item > div:nth-child(5) > textarea',
	offerContinueButton: '#ui-test-continue-button',
	offerPreviewDialog: '#dialog-stack > div > div > div > div.anchovy-form > div',
	
	offerPreviewHeaderValue: 'Preview Offer',
	offerPreviewTitle: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div.prepaid-payment-summary > div:nth-child(3) > div:nth-child(1) > span.line-item-desription.left',
	offerPreviewTaskPrice: '#dialog-stack > div > div > div > div.anchovy-form > div > div.dialog-panel-body > div > div.prepaid-payment-summary > div.total > div',
	offerSubmitButton: '#ui-test-submit-button',
	
	acceptUpdatedTermsCheckbox: '#ui-test-updated-terms > div > label',
	
	bidSubmitStatusDialog: '#dialog-stack > div > div > div > div.anchovy-form > div.make-bid-success-step',
	bidSubmitHeader: '#dialog-stack > div > div > div > div.anchovy-form > div.make-bid-success-step > div.dialog-panel-header',
	bidSuccessMessage: 'Offer successfully placed',
	bidSubmitCloseButton: '#ui-test-close-button',
	
	taskStatusButton: '#core-button',
	taskStatusMakeOffer: 'Make an Offer',
	taskStatusAwaitingOffers: 'Awaiting Offers',
	taskStatusReviewOffer: 'Review Offers',
	taskStatusPrivateMessage: 'Private Message',
	taskStatusRequestPayment: 'Request Payment',
	taskStatusUpdateOffer: 'Update Offer',
	taskStatusAwaitingPayment: 'Awaiting Payment',
	taskStatusReleasePayment: 'Release Payment',
	taskStatusLeaveReview: 'Leave Review',
	
	taskAssignDialog: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-task',
	taskAssignHeader: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-task > div.dialog-panel-header',
	taskAssignHeaderMessage: 'Review Offer',
	taskAssignAcceptOfferButton: '#ui-test-accept-offer',
	
	taskAssignAddFundsDialog: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-task-add-funds',
	taskAssignAddFundsHeader: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-task-add-funds > div.dialog-panel-header',
	taskAssignAddFundsHeaderMessage: 'Funds Required',
	taskAssignAddFundsAcceptButton: '#ui-test-confirm-offer',
	
	taskAssignSuccessLoader: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-success > div.loaderific',
	taskAssignSuccessNoLoader: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-success > div.loaderific-not-loading',
	taskAssignSuccessDialog: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-success',
	taskAssignSuccessHeader: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-success > div.dialog-panel-header',
	taskAssignSuccessHeaderMessage: 'Congratulations',
	
	congratsScreenSendMessageCTAButton: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-success > div.dialog-panel-footer > button.button-cta.button-lrg.left',
	congratsScreenCallCTAButton: '#dialog-stack > div > div > div > div.anchovy-form > div.assign-success > div.dialog-panel-footer > button.button-cta.button-lrg.right',
	congratsScreenClose: '#dialog-stack > div > div > div > div.close-cross',
	
	errorDialog: '#dialog-stack > div:nth-child(2) > div > div > div.error-message',
	buttonClassEnabled: 'button-cta',
	buttonClassDisabled: 'button-disabled',
	
	requestPaymentDialog: '#dialog-stack > div > div > div > div.request-release-payment',
	requestPaymentHeader: '#dialog-stack > div > div > div > div.request-release-payment > div.reviewing-phase > div.dialog-panel-header',
	requestPaymentHeaderMessage: 'Request Payment',
	requestPaymentTaskPrice: '#dialog-stack > div > div > div > div.request-release-payment > div.reviewing-phase > div.dialog-panel-body > div > div.prepaid-payment-summary > div.total > div',
	requestPaymentButton: '#ui-test-request-payment',
	
	requestPaymentSuccessNoLoader: '#dialog-stack > div > div > div > div.request-release-payment > div.loaderific-not-loading',
	requestPaymentStatusDialog: '#dialog-stack > div > div > div > div.request-release-payment > div.invoice-sent-phase',
	requestPaymentStatusHeader: '#dialog-stack > div > div > div > div.request-release-payment > div.invoice-sent-phase > div.dialog-panel-header',
	requestPaymentSuccessMessage: 'Your request has now been sent',
	requestPaymentStatusCloseButton: '#ui-test-close-request',
	
	confirmReleaseDialog: '#dialog-stack > div > div > div > div.request-release-payment > div.confirm-phase',
	confirmReleaseHeader: '#dialog-stack > div > div > div > div.request-release-payment > div.confirm-phase > div.dialog-panel-header',
	confirmReleaseHeaderMessage: 'Confirm Release',
	confirmReleaseTaskPrice: '#dialog-stack > div > div > div > div.request-release-payment > div.confirm-phase > div.dialog-panel-body > div > div.prepaid-payment-summary > div.total > div',
	confirmReleaseTaskTitle: '#dialog-stack > div > div > div > div.request-release-payment > div.confirm-phase > div.dialog-panel-body > div > div.prepaid-payment-summary > div:nth-child(3) > div > span.line-item-desription.left',
	confirmReleaseFundsButton: '#ui-test-release-funds',
	
	writeReviewDialogNoLoader: '#dialog-stack > div > div > div > div.write-review > div.loaderific-not-loading',
	writeReviewDialog: '#dialog-stack > div > div > div > div.write-review > div.unreviewed-phase',
	writeReviewDialogHeader: '#dialog-stack > div > div > div > div.write-review > div.unreviewed-phase > div.dialog-panel-header',
	writeReviewHeaderMessage: 'Write Review',
	writeReviewInput: '#dialog-stack > div > div > div > div.write-review > div.unreviewed-phase > div.dialog-panel-body > div > div > div.text-area > div > textarea',
	writeReviewSubmitButton: '#dialog-stack > div > div > div > div.write-review > div.unreviewed-phase > div.dialog-panel-footer > button',
	writeReviewCancelButton: '#dialog-stack > div > div > div > div.close-cross',
	
	stepOpen: '#page-and-screen-content > div.content > div > div.task-right > div.task-details > div.vertical-scroll > div > div.task-header > div.details-panel > div.step-bar-holder > div > div:nth-child(1)',
	
	stepAccepted: '#page-and-screen-content > div.content > div > div.task-right > div.task-details > div.vertical-scroll > div > div.task-header > div.details-panel > div.step-bar-holder > div > div:nth-child(2)',
	stepAcceptedGreyed: '#page-and-screen-content > div.content > div > div.task-right > div.task-details > div.vertical-scroll > div > div.task-header > div.details-panel > div.step-bar-holder > div > span:nth-child(2)',
	
	stepPaid: '#page-and-screen-content > div.content > div > div.task-right > div.task-details > div.vertical-scroll > div > div.task-header > div.details-panel > div.step-bar-holder > div > div:nth-child(3)',
	stepPaidGreyed: '#page-and-screen-content > div.content > div > div.task-right > div.task-details > div.vertical-scroll > div > div.task-header > div.details-panel > div.step-bar-holder > div > span:nth-child(3)',
	
	stepReviewed: '#page-and-screen-content > div.content > div > div.task-right > div.task-details > div.vertical-scroll > div > div.task-header > div.details-panel > div.step-bar-holder > div > div:nth-child(4)',
	stepReviewedGreyed: '#page-and-screen-content > div.content > div > div.task-right > div.task-details > div.vertical-scroll > div > div.task-header > div.details-panel > div.step-bar-holder > div > span:nth-child(4)',
	
	classCompleted: 'completed'
};

module.exports = taskDetailsPage;
