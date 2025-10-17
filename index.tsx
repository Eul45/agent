import { Ionicons } from '@expo/vector-icons';
import { Content, GoogleGenerativeAI } from '@google/generative-ai';
import AsyncStorage from '@react-native-async-storage/async-storage';
// ADD THIS at the top of your file with other imports
import * as Clipboard from 'expo-clipboard';
import * as Device from 'expo-device';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { ExpoSpeechRecognitionModule } from "expo-speech-recognition";
