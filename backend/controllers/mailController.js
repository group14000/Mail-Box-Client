const Mail = require("../models/Mail");
const Notification = require("../models/Notification");
const io = require("../app").io;

const composeMail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;
    const mail = await Mail.create({
      from: req.user._id,
      to,
      subject,
      message,
    });

    const notification = await Notification.create({
      user: to,
      message: `New mail from ${req.user.username}`,
    });

    // Emit notification
    io.to(to.toString()).emit("newMail", notification);

    res.status(201).json(mail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const inbox = async (req, res) => {
  try {
    const mails = await Mail.find({ to: req.user._id }).populate(
      "from",
      "username email"
    );
    res.json(mails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const readMessage = async (req, res) => {
  try {
    const mail = await Mail.findById(req.params.id).populate(
      "from",
      "username email"
    );
    if (mail.to.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }
    mail.read = true;
    await mail.save();
    res.json(mail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const markAsRead = async (req, res) => {
  try {
    const mail = await Mail.findById(req.params.id);
    if (mail.to.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }
    mail.read = true;
    await mail.save();
    res.json({ message: "Mail marked as read" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const unreadCount = async (req, res) => {
  try {
    const count = await Mail.countDocuments({ to: req.user._id, read: false });
    res.json({ unreadCount: count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMail = async (req, res) => {
  try {
    const mail = await Mail.findById(req.params.id);
    if (
      mail.to.toString() !== req.user._id.toString() &&
      mail.from.toString() !== req.user._id.toString()
    ) {
      return res.status(401).json({ message: "Not authorized" });
    }
    await mail.remove();
    res.json({ message: "Mail deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sentInbox = async (req, res) => {
  try {
    const mails = await Mail.find({ from: req.user._id }).populate(
      "to",
      "username email"
    );
    res.json(mails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  composeMail,
  inbox,
  readMessage,
  markAsRead,
  unreadCount,
  deleteMail,
  sentInbox,
};
