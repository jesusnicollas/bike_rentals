const LogService = require('../services/logService');

exports.getLogs = async (req, res) => {
    try {
        const logs = await LogService.getLogs();
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar logs' });
    }
};

exports.createLog = async (req, res) => {
    const { message, level } = req.body;
    const log = { message, level, timestamp: new Date() };

    try {
        await LogService.addLog(log);
        res.status(201).json({ message: 'Log criado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar log' });
    }
};