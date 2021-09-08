const router = require("express").Router();
const ControllerUser = require("../controllers/users.js");
const ControllerRecipe = require("../controllers/recipes.js");
const { authentication, authorization } = require("../helpers/auth.js");

router.post("/users/register", ControllerUser.register);
router.post("/users/login", ControllerUser.login);
// router.post("/users/login-google", ControllerUser.googleLogin);
router.get("/recipes", ControllerRecipe.viewRecipes);

router.use(authentication);
router.get("/users/userData", ControllerUser.fetchUserData);
router.get("/myProfile/recipes", ControllerRecipe.viewMyRecipes);
router.get("/recipes/:recipeId", ControllerRecipe.recipeDetail);

router.post("/newRecipe", ControllerRecipe.addRecipe);
router.post("/newRecipe/components/:recipeId", ControllerRecipe.addComponent);
router.post("/newRecipe/methods/:recipeId", ControllerRecipe.addMethod);
router.patch("/newRecipe/publish/:recipeId", ControllerRecipe.publishRecipe);

router.delete("/recipes/:recipeId", authorization, ControllerRecipe.destroy);
router.put("/editRecipe/:recipeId", authorization, ControllerRecipe.editRecipe);
router.put("/editRecipe/components/:componentId", authorization, ControllerRecipe.editComponent);
router.put("/editRecipe/methods/:methodId", authorization, ControllerRecipe.editMethod);

module.exports = router;
