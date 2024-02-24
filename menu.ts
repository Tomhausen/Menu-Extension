
namespace miniMenu{

    /**
    * Creates and returns a menu from an array of menu items and pauses the game whilst the menu is open
    */
    //% blockId=createMenuFromArrayAndPauseGame
    //% block="create menu from $items and pause game"
    //% blockSetVariable=myMenu
    //% items.shadow=lists_create_with
    //% items.defl=mini_menu_create_menu_item
    //% group="Create"
    //% weight=99

    export function createMenuFromArrayAndPauseGame(items: miniMenu.MenuItem[]): miniMenu.MenuSprite{
        let img = image.screenImage().clone();
        game.pushScene();
        scene.setBackgroundImage(img)
        let myMenu = miniMenu.createMenuFromArray(items);
        let closed = false;
        game.onUpdate(() => {
            if ((!myMenu || !!(myMenu.flags & sprites.Flag.Destroyed)) && !closed){
                game.popScene();
                closed = true;
            }
        })
        return myMenu
    }

}