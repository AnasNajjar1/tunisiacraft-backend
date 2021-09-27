const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const DeliveryMethod = require('../models/deliveryMethod');
const data = require('../data');
const { isAuth, isAdmin } = require('../utils');

const deliveryMethodRouter = express.Router();

deliveryMethodRouter.get('/', expressAsyncHandler(async (req, res) => {

    const deliveryMethods = await DeliveryMethod.find({});
    res.send(deliveryMethods);

}));


deliveryMethodRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const deliveryMethod = await DeliveryMethod.findById(req.params.id);
    if(deliveryMethod) {
        res.send(deliveryMethod);
    } else {
        res.status(404).send({ message: 'Delivery Method Not Found' });
    }
}));

deliveryMethodRouter.post('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const deliveryMethod = new DeliveryMethod({
        name: 'sample name' + Date.now(),
    });
    const createdDeliveryMethod = await deliveryMethod.save();
    res.status(201).send({ message: 'DeliveryMethod Created', deliveryMethod: createdDeliveryMethod });
}));

deliveryMethodRouter.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const deliveryMethodId = req.params.id;
    const deliveryMethod = await DeliveryMethod.findById(deliveryMethodId);
    if(deliveryMethod) {
        deliveryMethod.name = req.body.name;
        const updatedDeliveryMethod = await deliveryMethod.save();
        res.send({ message: 'Delivery Method Updated', deliveryMethod: updatedDeliveryMethod });
    } else {
        res.status(404).send({ message: 'Delivery Method Not Found' });
    }
}));

deliveryMethodRouter.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const deliveryMethod = await DeliveryMethod.findById(req.params.id);
    if(deliveryMethod) {
        const deletedDeliveryMethod = await deliveryMethod.remove();
        res.send({ message: 'Delivery Method Deleted', deliveryMethod: deletedDeliveryMethod });
    } else {
        res.status(404).send({ message: 'Delivery Method Not Found' });
    }
}));

module.exports = deliveryMethodRouter;