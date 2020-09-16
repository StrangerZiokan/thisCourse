const express = require('express');
const router = express.Router();

const apnacourse = require('../../middleware/apnacourse');
const arcademics = require('../../middleware/arcademics');
const bitdegree = require('../../middleware/bitdegree');
const codecademy = require('../../middleware/codeacademy');
const coursera = require('../../middleware/coursera');
const digigrad = require('../../middleware/digigrad');
const edx = require('../../middleware/edx');
const harvard = require('../../middleware/harvard');
const khanacademy = require('../../middleware/khanAcademy');
const openyale = require('../../middleware/openYale');
const skillshare = require('../../middleware/skillshare');
const udacity = require('../../middleware/udacity');
const udemy = require('../../middleware/udemy');
const verbling = require('../../middleware/verbling');

// Skills not working
    // bitdegree(req,res,next,'angular','development');
    // codecademy(req,res,next,'angular','development');
    // coursera(req,res,next,'CSS','development');
    // edx(req,res,next,'CSS','development');
    // coursera(req,res,next,'PHP','development');
    // codecademy(req,res,next,'PHP','development');
    // udacity(req,res,next,'PHP','development');
    // coursera(req,res,next,'nodejs','development');
    // bitdegree(req,res,next,'nodejs','development');
    // codecademy(req,res,next,'nodejs','development');
    // coursera(req,res,next,'react','development');
    // codecademy(req,res,next,'react','development');
    // coursera(req,res,next,'wordpress','development');
    // codecademy(req,res,next,'wordpress','development');
    // codecademy(req,res,next,'android','development');
    // codecademy(req,res,next,'flutter','development');
    // coursera(req,res,next,'ReactNative','development');
    // codecademy(req,res,next,'ReactNative','development');
    // codecademy(req,res,next,'dart','development');
    // bitdegree(req,res,next,'Kotlin','development');
    // codecademy(req,res,next,'Kotlin','development');
    // codecademy(req,res,next,'Machine Learning','development');
    // codecademy(req,res,next,'Deep Learning','development');
    // codecademy(req,res,next,'R','development');
    // coursera(req,res,next,'TensorFlow','development');
    // bitdegree(req,res,next,'TensorFlow','development');
    // codecademy(req,res,next,'TensorFlow','development');
    // codecademy(req,res,next,'Artificial Intelligence','development');
    // codecademy(req,res,next,'C','development');
    // codecademy(req,res,next,'C++','development');
    // codecademy(req,res,next,'C#','development');
    // bitdegree(req,res,next,'Spring','development');
    // codecademy(req,res,next,'Spring','development');
    // codecademy(req,res,next,'Unity Game Development','development');
    // coursera(req,res,next,'Unreal Engine','development');
    // codecademy(req,res,next,'Unreal Engine','development');
    // coursera(req,res,next,'Blender','development');
    // codecademy(req,res,next,'Blender','development');
    // codecademy(req,res,next,'3D Game Development','development');
    // codecademy(req,res,next,'2D Game Development','development');
    // codecademy(req,res,next,'SQL','development');
    // coursera(req,res,next,'NoSQL','development');
    // bitdegree(req,res,next,'NoSQL','development');
    // codecademy(req,res,next,'NoSQL','development');
    // codecademy(req,res,next,'MySql','development');
    // bitdegree(req,res,next,'PostgreSQL','development');
    // codecademy(req,res,next,'PostgreSQL','development');
    // coursera(req,res,next,'AWS','development');
    // bitdegree(req,res,next,'AWS','development');
    // coursera(req,res,next,'Kubernetes','development');
    // bitdegree(req,res,next,'Kubernetes','development');
    // codecademy(req,res,next,'Kubernetes','development');
    // coursera(req,res,next,'Docker','development');
    // bitdegree(req,res,next,'Docker','development');
    // codecademy(req,res,next,'Docker','development');
    // coursera(req,res,next,'Git','development');
    // bitdegree(req,res,next,'Git','development');
    // codecademy(req,res,next,'Git','development');
    // udemy(req,res,next,'Git','development');// coursera(req,res,next,'Jenkins','development');
    // bitdegree(req,res,next,'Jenkins','development');
    // codecademy(req,res,next,'Jenkins','development');
    // udemy(req,res,next,'ReactNative','development');
router.get("/",(req,res,next) => {

    // coursera(req,res,next,'javascript','development');
    // bitdegree(req,res,next,'javascript','development');
    // codecademy(req,res,next,'javascript','development');
    // edx(req,res,next,'javascript','development');
    // khanacademy(req,res,next,'javascript','development');
    // skillshare(req,res,next,'javascript','development');
    // udacity(req,res,next,'javascript','development');
    // udemy(req,res,next,'javascript','development');

    // coursera(req,res,next,'angular','development');
    // edx(req,res,next,'angular','development');
    // khanacademy(req,res,next,'angular','development');
    // skillshare(req,res,next,'angular','development');
    // udacity(req,res,next,'angular','development');
    // udemy(req,res,next,'angular','development');

    // bitdegree(req,res,next,'CSS','development');
    // codecademy(req,res,next,'CSS','development');
    // khanacademy(req,res,next,'CSS','development');
    // skillshare(req,res,next,'CSS','development');
    // udacity(req,res,next,'CSS','development');
    // udemy(req,res,next,'CSS','development');

    // bitdegree(req,res,next,'PHP','development');
    // edx(req,res,next,'PHP','development');
    // khanacademy(req,res,next,'PHP','development');
    // skillshare(req,res,next,'PHP','development');
    // udemy(req,res,next,'PHP','development');

    // edx(req,res,next,'nodejs','development');
    // khanacademy(req,res,next,'nodejs','development');
    // skillshare(req,res,next,'nodejs','development');
    // udacity(req,res,next,'nodejs','development');
    // udemy(req,res,next,'nodejs','development');

    // edx(req,res,next,'react','development');
    // bitdegree(req,res,next,'react','development');
    // khanacademy(req,res,next,'react','development');
    // skillshare(req,res,next,'react','development');
    // udacity(req,res,next,'react','development');
    // udemy(req,res,next,'react','development');

    // coursera(req,res,next,'python','development');
    // bitdegree(req,res,next,'python','development');
    // codecademy(req,res,next,'python','development');
    // edx(req,res,next,'python','development');
    // khanacademy(req,res,next,'python','development');
    // skillshare(req,res,next,'python','development');
    // udacity(req,res,next,'python','development');
    // udemy(req,res,next,'python','development');

    // bitdegree(req,res,next,'wordpress','development');
    // edx(req,res,next,'wordpress','development');
    // khanacademy(req,res,next,'wordpress','development');
    // skillshare(req,res,next,'wordpress','development');
    // udacity(req,res,next,'wordpress','development');
    // udemy(req,res,next,'wordpress','development');

    // coursera(req,res,next,'android','development');
    // bitdegree(req,res,next,'android','development');
    // edx(req,res,next,'android','development');
    // khanacademy(req,res,next,'android','development');
    // skillshare(req,res,next,'android','development');
    // udacity(req,res,next,'android','development');
    // udemy(req,res,next,'android','development');

    // coursera(req,res,next,'flutter','development');
    // bitdegree(req,res,next,'flutter','development');
    // edx(req,res,next,'flutter','development');
    // khanacademy(req,res,next,'flutter','development');
    // skillshare(req,res,next,'flutter','development');
    // udacity(req,res,next,'flutter','development');
    // udemy(req,res,next,'flutter','development');

    // coursera(req,res,next,'ios','development');
    // bitdegree(req,res,next,'ios','development');
    // codecademy(req,res,next,'ios','development');
    // edx(req,res,next,'ios','development');
    // khanacademy(req,res,next,'ios','development');
    // skillshare(req,res,next,'ios','development');
    // udacity(req,res,next,'ios','development');
    // udemy(req,res,next,'ios','development');

    // bitdegree(req,res,next,'ReactNative','development');
    // edx(req,res,next,'ReactNative','development');
    // khanacademy(req,res,next,'ReactNative','development');
    // skillshare(req,res,next,'ReactNative','development');
    // udacity(req,res,next,'ReactNative','development');
    

    // coursera(req,res,next,'dart','development');
    // bitdegree(req,res,next,'dart','development');
    // edx(req,res,next,'dart','development');
    // khanacademy(req,res,next,'dart','development');
    // skillshare(req,res,next,'dart','development');
    // udacity(req,res,next,'dart','development');
    // udemy(req,res,next,'dart','development');

    // coursera(req,res,next,'Kotlin','development');
    // edx(req,res,next,'Kotlin','development');
    // khanacademy(req,res,next,'Kotlin','development');
    // skillshare(req,res,next,'Kotlin','development');
    // udacity(req,res,next,'Kotlin','development');
    // udemy(req,res,next,'Kotlin','development');

    // coursera(req,res,next,'Data Science','development');
    // bitdegree(req,res,next,'Data Science','development');
    // codecademy(req,res,next,'Data Science','development');
    // edx(req,res,next,'Data Science','development');
    // khanacademy(req,res,next,'Data Science','development');
    // skillshare(req,res,next,'Data Science','development');
    // udacity(req,res,next,'Data Science','development');
    // udemy(req,res,next,'Data Science','development');

    // coursera(req,res,next,'Machine Learning','development');
    // bitdegree(req,res,next,'Machine Learning','development');
    // edx(req,res,next,'Machine Learning','development');
    // khanacademy(req,res,next,'Machine Learning','development');
    // skillshare(req,res,next,'Machine Learning','development');
    // udacity(req,res,next,'Machine Learning','development');
    // udemy(req,res,next,'Machine Learning','development');

    // coursera(req,res,next,'Deep Learning','development');
    // bitdegree(req,res,next,'Deep Learning','development');
    // edx(req,res,next,'Deep Learning','development');
    // khanacademy(req,res,next,'Deep Learning','development');
    // skillshare(req,res,next,'Deep Learning','development');
    // udacity(req,res,next,'Deep Learning','development');
    // udemy(req,res,next,'Deep Learning','development');

    // coursera(req,res,next,'Data Analysis','development');
    // bitdegree(req,res,next,'Data Analysis','development');
    // codecademy(req,res,next,'Data Analysis','development');
    // edx(req,res,next,'Data Analysis','development');
    // khanacademy(req,res,next,'Data Analysis','development');
    // skillshare(req,res,next,'Data Analysis','development');
    // udacity(req,res,next,'Data Analysis','development');
    // udemy(req,res,next,'Data Analysis','development');

    // coursera(req,res,next,'R','development');
    // bitdegree(req,res,next,'R','development');
    // edx(req,res,next,'R','development');
    // khanacademy(req,res,next,'R','development');
    // skillshare(req,res,next,'R','development');
    // udacity(req,res,next,'R','development');
    // udemy(req,res,next,'R','development');

    // edx(req,res,next,'TensorFlow','development');
    // khanacademy(req,res,next,'TensorFlow','development');
    // skillshare(req,res,next,'TensorFlow','development');
    // udacity(req,res,next,'TensorFlow','development');
    // udemy(req,res,next,'TensorFlow','development');

    // coursera(req,res,next,'Artificial Intelligence','development');
    // bitdegree(req,res,next,'Artificial Intelligence','development');
    // edx(req,res,next,'Artificial Intelligence','development');
    // khanacademy(req,res,next,'Artificial Intelligence','development');
    // skillshare(req,res,next,'Artificial Intelligence','development');
    // udacity(req,res,next,'Artificial Intelligence','development');
    // udemy(req,res,next,'Artificial Intelligence','development');

    // coursera(req,res,next,'C','development');
    // bitdegree(req,res,next,'C','development');    
    // edx(req,res,next,'C','development');
    // khanacademy(req,res,next,'C','development');
    // skillshare(req,res,next,'C','development');
    // udacity(req,res,next,'C','development');
    // udemy(req,res,next,'C','development');

    // coursera(req,res,next,'C++','development');
    // bitdegree(req,res,next,'C++','development');
    // edx(req,res,next,'C++','development');
    // khanacademy(req,res,next,'C++','development');
    // skillshare(req,res,next,'C++','development');
    // udacity(req,res,next,'C++','development');
    // udemy(req,res,next,'C++','development');

    // coursera(req,res,next,'Java','development');
    // bitdegree(req,res,next,'Java','development');
    // codecademy(req,res,next,'Java','development');
    // edx(req,res,next,'Java','development');
    // khanacademy(req,res,next,'Java','development');
    // skillshare(req,res,next,'Java','development');
    // udacity(req,res,next,'Java','development');
    // udemy(req,res,next,'Java','development');

    // coursera(req,res,next,'C#','development');
    // bitdegree(req,res,next,'C#','development');
    // edx(req,res,next,'C#','development');
    // khanacademy(req,res,next,'C#','development');
    // skillshare(req,res,next,'C#','development');
    // udacity(req,res,next,'C#','development');
    // udemy(req,res,next,'C#','development');

    // coursera(req,res,next,'Spring','development');
    // edx(req,res,next,'Spring','development');
    // khanacademy(req,res,next,'Spring','development');
    // skillshare(req,res,next,'Spring','development');
    // udacity(req,res,next,'Spring','development');
    // udemy(req,res,next,'Spring','development');

    // coursera(req,res,next,'Unity Game Development','development');
    // bitdegree(req,res,next,'Unity Game Development','development');
    // edx(req,res,next,'Unity Game Development','development');
    // khanacademy(req,res,next,'Unity Game Development','development');
    // skillshare(req,res,next,'Unity Game Development','development');
    // udacity(req,res,next,'Unity Game Development','development');
    // udemy(req,res,next,'Unity Game Development','development');

    
    // bitdegree(req,res,next,'Unreal Engine','development');    
    // edx(req,res,next,'Unreal Engine','development');
    // khanacademy(req,res,next,'Unreal Engine','development');
    // skillshare(req,res,next,'Unreal Engine','development');
    // udacity(req,res,next,'Unreal Engine','development');
    // udemy(req,res,next,'Unreal Engine','development');

    // bitdegree(req,res,next,'Blender','development');
    // edx(req,res,next,'Blender','development');
    // khanacademy(req,res,next,'Blender','development');
    // skillshare(req,res,next,'Blender','development');
    // udacity(req,res,next,'Blender','development');
    // udemy(req,res,next,'Blender','development');

    // coursera(req,res,next,'3D Game Development','development');
    // bitdegree(req,res,next,'3D Game Development','development');
    // edx(req,res,next,'3D Game Development','development');
    // khanacademy(req,res,next,'3D Game Development','development');
    // skillshare(req,res,next,'3D Game Development','development');
    // udacity(req,res,next,'3D Game Development','development');
    // udemy(req,res,next,'3D Game Development','development');

    // coursera(req,res,next,'2D Game Development','development');
    // bitdegree(req,res,next,'2D Game Development','development');    
    // edx(req,res,next,'2D Game Development','development');
    // khanacademy(req,res,next,'2D Game Development','development');
    // skillshare(req,res,next,'2D Game Development','development');
    // udacity(req,res,next,'2D Game Development','development');
    // udemy(req,res,next,'2D Game Development','development');

    // coursera(req,res,next,'SQL','development');
    // bitdegree(req,res,next,'SQL','development');
    // edx(req,res,next,'SQL','development');
    // khanacademy(req,res,next,'SQL','development');
    // skillshare(req,res,next,'SQL','development');
    // udacity(req,res,next,'SQL','development');
    // udemy(req,res,next,'SQL','development');

    // edx(req,res,next,'NoSQL','development');
    // khanacademy(req,res,next,'NoSQL','development');
    // skillshare(req,res,next,'NoSQL','development');
    // udacity(req,res,next,'NoSQL','development');
    // udemy(req,res,next,'NoSQL','development');

    // coursera(req,res,next,'MySql','development');
    // bitdegree(req,res,next,'MySql','development');
    // edx(req,res,next,'MySql','development');
    // khanacademy(req,res,next,'MySql','development');
    // skillshare(req,res,next,'MySql','development');
    // udacity(req,res,next,'MySql','development');
    // udemy(req,res,next,'MySql','development');

    // coursera(req,res,next,'PostgreSQL','development');
    // edx(req,res,next,'PostgreSQL','development');
    // khanacademy(req,res,next,'PostgreSQL','development');
    // skillshare(req,res,next,'PostgreSQL','development');
    // udacity(req,res,next,'PostgreSQL','development');
    // udemy(req,res,next,'PostgreSQL','development');
    
    // codecademy(req,res,next,'AWS','development');
    // edx(req,res,next,'AWS','development');
    // khanacademy(req,res,next,'AWS','development');
    // skillshare(req,res,next,'AWS','development');
    // udacity(req,res,next,'AWS','development');
    // udemy(req,res,next,'AWS','development');

    
    // edx(req,res,next,'Kubernetes','development');
    // khanacademy(req,res,next,'Kubernetes','development');
    // skillshare(req,res,next,'Kubernetes','development');
    // udacity(req,res,next,'Kubernetes','development');
    // udemy(req,res,next,'Kubernetes','development');

    
    // edx(req,res,next,'Docker','development');
    // khanacademy(req,res,next,'Docker','development');
    // skillshare(req,res,next,'Docker','development');
    // udacity(req,res,next,'Docker','development');
    // udemy(req,res,next,'Docker','development');

    // edx(req,res,next,'Git','development');
    // khanacademy(req,res,next,'Git','development');
    // skillshare(req,res,next,'Git','development');
    // udacity(req,res,next,'Git','development');
    
    // edx(req,res,next,'Jenkins','development');
    // khanacademy(req,res,next,'Jenkins','development');
    // skillshare(req,res,next,'Jenkins','development');
    // udacity(req,res,next,'Jenkins','development');
    // udemy(req,res,next,'Jenkins','development');
    
    console.log('Inside Development');
	res.status(200).json({
		message:'Search Results for development !'
		// query: query.q,
	});
});

module.exports = router;