const { User } = require('../model/tems');

exports.addteam = async (req, res) => {
    try {
        const { teamName, selectedItems } = req.body;

        for (const item of selectedItems) {
            const userData = {
                teamName,
                first_name: item.first_name,
                last_name: item.last_name,
                email: item.email,
                gender: item.gender,
                domain: item.domain,
                avatar: item.avatar,
            };

            await User.create(userData);
        }

        res.status(200).json({ message: 'Data stored successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getTeam = async (req, res) => {
    try {
        const users = await User.find({}, { _id: 0, __v: 0 }); // Exclude _id and __v fields
        const teamsData = {};

        // Group users by teamName
        users.forEach((user) => {
            if (!teamsData[user.teamName]) {
                teamsData[user.teamName] = { _id: user.teamName, members: [] };
            }

            teamsData[user.teamName].members.push({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                gender: user.gender,
                domain: user.domain,
                avatar: user.avatar,
            });
        });

        const formattedTeams = Object.values(teamsData);

        res.status(200).json({ teams: formattedTeams });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};