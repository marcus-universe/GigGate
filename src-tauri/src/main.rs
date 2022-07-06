#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

fn main() {
    use tauri::Manager;
    tauri::Builder::default()
        //Setup to get Windows
        .setup(|app| {
            let _main_window = app.get_window("giggate").unwrap();
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
