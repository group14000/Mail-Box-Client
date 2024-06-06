const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  composeMail,
  inbox,
  readMessage,
  markAsRead,
  unreadCount,
  deleteMail,
  sentInbox,
} = require("../controllers/mailController");

const router = express.Router();

router.post("/compose", protect, composeMail);
router.get("/inbox", protect, inbox);
router.get("/read/:id", protect, readMessage);
router.put("/mark-as-read/:id", protect, markAsRead);
router.get("/unread-count", protect, unreadCount);
router.delete("/delete/:id", protect, deleteMail);
router.get("/sent", protect, sentInbox);

module.exports = router;
