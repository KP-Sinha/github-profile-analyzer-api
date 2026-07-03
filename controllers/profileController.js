const axios = require("axios");
const db = require("../config/db");

exports.analyzeProfile = async (req, res) => {
  try {
    const { username } = req.body;

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const user = response.data;

    const sql = `
      INSERT INTO github_profiles
      (
        github_username,
        name,
        public_repos,
        followers,
        following,
        profile_url,
        account_created
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        user.login,
        user.name,
        user.public_repos,
        user.followers,
        user.following,
        user.html_url,
        user.created_at.split("T")[0],
      ],
      (err) => {
        if (err) {
          return res.status(500).json(err);
        }

        res.status(201).json({
          message: "Profile analyzed successfully",
          data: user,
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllProfiles = (req, res) => {
  db.query("SELECT * FROM github_profiles", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

exports.getSingleProfile = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM github_profiles WHERE id=?",
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "Profile not found",
        });
      }

      res.json(result[0]);
    }
  );
};