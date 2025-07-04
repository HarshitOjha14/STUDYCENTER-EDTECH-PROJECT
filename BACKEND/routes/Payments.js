// Import the required modules
const express = require("express")
const router = express.Router()


const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
router.post("/capturePayment", auth, isStudent, capturePayment)
router.post("/verifyPayment", auth, isStudent, verifyPayment)
router.post(
  "/sendPaymentSuccessEmail",
  auth,
  isStudent,
  sendPaymentSuccessEmail
)
// router.post("/verifySignature", verifySignature)

module.exports = router
